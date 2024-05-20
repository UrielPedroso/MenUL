<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['erro' => 'Por favor preencha todos os campos']);
    exit;
}

$telefone = $data['telefone'];
$nome = $data['nome'];
$senha = $data['senha'];

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'menul';

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

$verifica_sql = "SELECT * FROM clientes WHERE telefone = '$telefone'";
$resultado = $conn->query($verifica_sql);

if ($resultado->num_rows > 0) {
    echo json_encode(['erro' => 'Usuário com este telefone já existe']);
    exit;
}

// Criptografar a senha
$senha_criptografada = password_hash($senha, PASSWORD_BCRYPT);

$sql = "INSERT INTO clientes (telefone, nome, senha) VALUES ('$telefone', '$nome', '$senha_criptografada')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['mensagem' => 'Dados inseridos com sucesso!']);
} else {
    echo json_encode(['erro' => 'Erro ao inserir dados: ' . $conn->error]);
}

$conn->close();

?>
