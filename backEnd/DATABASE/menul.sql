-- Tabela Clientes
CREATE TABLE Clientes (
    ID_Cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    senha VARCHAR(20),
    Mesa INT,
    Numero_Comanda INT
);

-- Tabela Itens do Cardápio
CREATE TABLE Itens_do_Cardapio (
    ID_Item INT PRIMARY KEY,
    Nome_Item VARCHAR(100),
    Descricao TEXT,
    Preco DECIMAL(10, 2),
    Categoria VARCHAR(50)
);

-- Tabela Pedidos
CREATE TABLE Pedidos (
    ID_Pedido INT PRIMARY KEY,
    ID_Cliente INT,
    Data_Hora_Pedido DATETIME,
    Estado_Pedido VARCHAR(50),
    Metodo_Pagamento VARCHAR(50),
    Status_Pagamento VARCHAR(20),
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente)
);

-- Tabela Itens do Pedido
CREATE TABLE Itens_do_Pedido (
    ID_Item_Pedido INT PRIMARY KEY,
    ID_Pedido INT,
    ID_Item_Cardapio INT,
    Quantidade INT,
    Observacoes TEXT,
    FOREIGN KEY (ID_Pedido) REFERENCES Pedidos(ID_Pedido),
    FOREIGN KEY (ID_Item_Cardapio) REFERENCES Itens_do_Cardapio(ID_Item)
);

-- Tabela Funcionarios
CREATE TABLE Funcionarios (
    ID_Funcionario INT PRIMARY KEY,
    Nome_Completo VARCHAR(100),
    Cargo VARCHAR(100),
    Login VARCHAR(50),
    Senha VARCHAR(50)
);

-- Tabela Demandas do Funcionário
CREATE TABLE Demandas_do_Funcionario (
    ID_Demanda INT PRIMARY KEY,
    Tipo_Demanda VARCHAR(100),
    Descricao TEXT,
    ID_Funcionario_Responsavel INT,
    Estado_Demanda VARCHAR(50),
    FOREIGN KEY (ID_Funcionario_Responsavel) REFERENCES Funcionarios(ID_Funcionario)
);