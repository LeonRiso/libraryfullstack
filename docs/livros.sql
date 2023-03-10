-- SQL do banco de dados de Inventários com apenas uma tabela

DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca CHARSET=UTF8 COLLATE utf8_general_ci;
USE biblioteca;

-- DDL Criação da estrutura da tabela

CREATE TABLE Livros(
    id varchar(5) not null primary key,
    titulo varchar(50) not null,
    autor varchar (50) not null,
    DataEmprest date not null
    DataPrevDev date not null
    NomeUser varchar(50) not null
    cpf varchar(50) not null
);

-- DML Popular a tabela com dados de teste

INSERT INTO Livros VALUES
('i001','Senhor dos Aneis','JRR Tolkien',05-02-2023,25-03-2023,'Bruno Alvarez','123.757.722-53'),
('i002','Guerra dos Tronos','George RR Martin',06-02-2023,25-03-2023,'Camilo Galvarez','958.378.645-47'),
('i001','Dialogos','Platao',05-02-2023,25-03-2023,'Danilo Alvarez','774.579.164-23'),
('i004','O Rei do Inverno','Bernard Cornwell',06-03-2023,26-04-2023,'Jandiro Leon','863.844.147-91'),
