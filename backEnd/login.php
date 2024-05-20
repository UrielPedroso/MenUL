<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require 'db.php';  // Arquivo para conexão com o banco de dados

$data = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $data['nome'] ?? '';
    $senha = $data['senha'] ?? '';

    if (empty($nome) || empty($senha)) {
        echo json_encode(['success' => false, 'erro' => 'Nome e senha são obrigatórios.']);
        exit;
    }

    $stmt = $conn->prepare('SELECT ID_Cliente, senha FROM clientes WHERE nome = ?');
    $stmt->bind_param('s', $nome);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($ID_Cliente, $hashedPassword);
        $stmt->fetch();

        if (password_verify($senha, $hashedPassword)) {
            echo json_encode(['success' => true, 'ID_Cliente' => $ID_Cliente]);
        } else {
            echo json_encode(['success' => false, 'erro' => 'Senha incorreta.']);
        }
    } else {
        echo json_encode(['success' => false, 'erro' => 'Usuário não encontrado.']);
    }

    $stmt->close();
    $conn->close();
}
?>
