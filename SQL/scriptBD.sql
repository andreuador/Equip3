-- Borrar base de dades
DROP DATABASE IF EXISTS db_equip3;

-- Crear una base de dades
CREATE DATABASE IF NOT EXISTS db_equip3;

-- Usar la base de dades creada
USE db_equip3;

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
    preu_c DECIMAL(10, 2) NOT NULL
);

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
);

-- Crear una tabla "comanda"
CREATE TABLE IF NOT EXISTS comanda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    num_vehicles INT NOT NULL,
    estat VARCHAR(50) NOT NULL,
    matricula_v VARCHAR(10) NOT NULL,
    FOREIGN KEY (matricula_v) REFERENCES vehicles(matricula)
);

-- Crear una tabla "factura"
CREATE TABLE IF NOT EXISTS factura(
    id INT AUTO_INCREMENT PRIMARY KEY,
    preu DECIMAL(10, 2) NOT NULL,
    data_fac DATE NOT NULL,
    dni_client VARCHAR(10) NOT NULL,
    id_comanda INT NOT NULL,
    FOREIGN KEY (dni_client) REFERENCES clients(dni),
    FOREIGN KEY (id_comanda) REFERENCES comanda(id)
);

-- Inserts vehicles
INSERT INTO vehicles (matricula, color, danys, model, carburant, data_mat, km, marca, descripcio, iva, num_bastidor, canvi_m, preu_v, preu_c, id_comanda)
VALUES
    ('ABC123', 'Rojo', 'Ninguno', 'Sedán', 'Gasolina', '2023-01-15', 50000, 'Toyota', 'Descripción del vehículo 1', 21.00, '12345', 'Manual', 15000.00, 12000.00, 1),
    ('XYZ789', 'Azul', 'Arañazos en la puerta trasera', 'SUV', 'Diésel', '2022-11-20', 60000, 'Ford', 'Descripción del vehículo 2', 21.00, '54321', 'Automático', 18000.00, 14000.00, 2);

-- Inserts clients
INSERT INTO clients (dni, nom, cognom1, cognom2, direccio, nom_usuari, num_targeta, tipus_client)
VALUES
    ('12345678A', 'Juan', 'Gómez', 'Pérez', 'Calle Principal 123', 'juangomez', '1234567890123456', 'Particular'),
    ('98765432B', 'María', 'López', 'Martínez', 'Avenida Secundaria 456', 'marialopez', '7890123456789012', 'Profesional');

 -- Inserts comanda
 INSERT INTO comanda (num_vehicles, estat, matricula_v)
VALUES
    (2, 'Pendiente', 'ABC123'),
    (1, 'En proceso', 'XYZ789');

-- Inserts factura
INSERT INTO factura (preu, data_fac, dni_client, id_comanda)
VALUES
    (15000.00, '2023-01-20', '12345678A', 1),
    (18000.00, '2023-02-10', '98765432B', 2);
