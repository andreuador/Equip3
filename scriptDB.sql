-- Crear una base de dades --
CREATE DATABASE IF NOT EXISTS db_equip3

-- Usar la base de dades creada
Use db_equip3;

-- Crear una tabla "vehicles"
CREATE TABLE IF NOT EXISTS vehicles (
    matricula VARCHAR(10) PRIMARY KEY,
    color VARCHAR(50) NOT NULL,
    danys TEXT,
    model VARCHAR(50) NOT NULL,
    carburant VARCHAR(50) NOT NULL,
    data_mat DATE NOT NULL,
    km INT NOT NULL,
    marca VARCHAR(50) NOT NULL,
    descripcio TEXT,
    iva DECIMAL(5,2) NOT NULL,
    num_bastidor VARCHAR(50) NOT NULL,
    canvi_m VARCHAR(20) NOT NULL,
    preu_v DECIMAL(10, 2) NOT NULL,
    preu_c DECIMAL(10, 2) NOT NULL,
)

-- Crear una tabla "clients"
CREATE TABLE IF NOT EXISTS clients (
    dni VARCHAR(10) PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    cognom1 VARCHAR(50) NOT NULL,
    cognom2 VARCHAR(50) NOT NULL,
    direccio VARCHAR(255) NOT NULL,
    nom_usuari VARCHAR(50) NOT NULL,
    num_targeta VARCHAR(20),
    tipus_client ENUM('Particular', 'Profesional') NOT NULL
)

-- Crear una tabla "comanda"
CREATE TABLE IF NOT EXISTS comanda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    num_vehicles INT NOT NULL,
    estat VARCHAR(50) NOT NULL
)

-- Crear una tabla "factura"
CREATE TABLE IF NOT EXISTS factura(
    id INT AUTO_INCREMENT PRIMARY KEY,
    preu DECIMAL(10, 2) NOT NULL,
    data_fac DATE NOT NULL
)