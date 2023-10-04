-- Borrar base de dades
DROP DATABASE IF EXISTS db_equip3;

-- Crear una base de dades
CREATE DATABASE IF NOT EXISTS db_equip3;

-- Usar la base de dades creada
USE db_equip3;

-- Crear una tabla "vehicles"
CREATE TABLE IF NOT EXISTS vehiculo (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    matricula VARCHAR(10),
    color VARCHAR(50) NOT NULL,
    danos TEXT,
    modelo INT,
    tipo_carburante VARCHAR(50) NOT NULL,
    fecha_matriculacion DATE NOT NULL,
    kilometros INT NOT NULL,
    marca INT,
    descripcion TEXT,
    iva DECIMAL(5,2) NOT NULL,
    num_bastidor VARCHAR(50) NOT NULL,
    tipo_cambio VARCHAR(20) NOT NULL,
    precio_venta DECIMAL(10, 2) NOT NULL,
    precio_compra DECIMAL(10, 2) NOT NULL,
    id_comanda INT,
    id_proveedor INT,
    INDEX (matricula)
);

-- Crear una tabla "clients"
CREATE TABLE usuarios (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipo_usuario VARCHAR(225) NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	apellido VARCHAR(255) NOT NULL,
	domicilio VARCHAR(255) NOT NULL,
	DNI VARCHAR(10) NOT NULL,
	INDEX (DNI),
	telefono VARCHAR(15) NOT NULL,
	razon_social VARCHAR(255) NOT NULL,
	correo_electronico VARCHAR(255) NOT NULL
);

-- Crear una tabla "comanda"
CREATE TABLE IF NOT EXISTS comanda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    num_vehiculo INT NOT NULL,
    estado VARCHAR(50) NOT NULL,
    matricula_v VARCHAR(10),
    id_factura INT,
	FOREIGN KEY (matricula_v) REFERENCES vehiculo(matricula)
);

-- Crear una tabla "factura"
CREATE TABLE IF NOT EXISTS factura(
    id INT AUTO_INCREMENT PRIMARY KEY,
    precio DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL,
    dni_usuario VARCHAR(10) NOT NULL,
    id_comanda INT NOT NULL,
    matricula_vehiculo VARCHAR(10),
    FOREIGN KEY (dni_usuario) REFERENCES usuarios(DNI),
    FOREIGN KEY (id_comanda) REFERENCES comanda(id),
    FOREIGN KEY (matricula_vehiculo) REFERENCES vehiculo (matricula)

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
