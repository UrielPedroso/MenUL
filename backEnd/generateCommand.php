<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require 'db.php';  // Arquivo para conexão com o banco de dados

$data = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tableNumber = $data['tableNumber'] ?? '';
    $ID_Cliente = $data['ID_Cliente'] ?? '';  // Presumindo que o ID_Cliente foi passado

    if (empty($tableNumber) || empty($ID_Cliente)) {
        echo json_encode(['success' => false, 'erro' => 'Número da mesa e ID do cliente são obrigatórios.']);
        exit;
    }

    $commandNumber = strval(rand(1000, 9999));

    $stmt = $conn->prepare('UPDATE clientes SET mesa = ?, numero_comanda = ? WHERE ID_Cliente = ?');
    $stmt->bind_param('isi', $tableNumber, $commandNumber, $ID_Cliente);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'numero_comanda' => $commandNumber]);
    } else {
        echo json_encode(['success' => false, 'erro' => 'Erro ao gerar comanda.']);
    }

    $stmt->close();
    $conn->close();
}
?>
