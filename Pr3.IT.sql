CREATE DATABASE PETSHOP;
GO
USE PETSHOP;
GO

CREATE TABLE roles(
	ID_role INT PRIMARY KEY IDENTITY(1,1),
	role_name VARCHAR(10) UNIQUE NOT NULL
	);
GO

CREATE TABLE users(
	ID_user INT PRIMARY KEY IDENTITY(1,1),
	login VARCHAR(20) NOT NULL,
	password VARCHAR(20) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30) NULL,
    gender VARCHAR(7) NOT NULL CHECK (gender IN ('Мужской', 'Женский')),
	adress VARCHAR(50) NOT NULL,
    number VARCHAR(12) NOT NULL,
	role_ID INT NOT NULL,
    FOREIGN KEY (role_ID) REFERENCES roles(ID_role)
	);
GO

CREATE TABLE services(
	ID_service INT PRIMARY KEY IDENTITY(1,1),
	service_name VARCHAR(50) UNIQUE NOT NULL,
	price DECIMAL(10,2) NOT NULL CHECK(price >= 0)
	);
GO

CREATE TABLE appointments (
	ID_appointment INT PRIMARY KEY IDENTITY(1,1),
	service_ID INT NOT NULL,
	FOREIGN KEY (service_ID) REFERENCES services(ID_service),
	date_of_appointment DATE NOT NULL CHECK(date_of_appointment >= GETDATE()),
	time_of_appointment TIME NOT NULL,
	customer_ID INT NOT NULL,
	FOREIGN KEY (customer_ID) REFERENCES users(ID_user),
	employee_ID INT NOT NULL,
	FOREIGN KEY (employee_ID) REFERENCES users(ID_user),
	);
GO

CREATE TABLE payments (
	ID_payment INT PRIMARY KEY IDENTITY(1,1),
	amount DECIMAL(10,2) NOT NULL,
	date_of_payment DATETIME DEFAULT CURRENT_TIMESTAMP,
	appointment_ID INT NOT NULL,
	FOREIGN KEY (appointment_ID) REFERENCES appointments(ID_appointment),
	user_ID INT NOT NULL,
	FOREIGN KEY (user_ID) REFERENCES users(ID_user),
	);
GO

INSERT INTO roles(role_name) VALUES
	('Сотрудник'),
	('Клиент');

INSERT INTO users(login, password, surname, name, middle_name, gender, adress, number, role_ID) VALUES
	('АДМИН', '123', 'Коммунист', 'Александр', 'Владимирович', 'Мужской', 'ул. Ленина, 21', '79101991098', 1),
	('Вован2004', '456', 'Трупиков', 'Сергей', 'Алексеевич', 'Мужской', 'ул. Смерти, 13', '79212223344', 2),
	('КирОчка', '789', 'Мясорубка', 'Кира', NULL , 'Женский', 'ул. Мясникова, 1', '79313334455', 2);

INSERT INTO services(service_name, price) VALUES
	('Покупка животного', 3000),
	('Груминг', 5000),
	('Мытьё', 1000);

INSERT INTO appointments( service_ID, date_of_appointment, time_of_appointment, customer_ID, employee_ID) VALUES
	(3,'2025-10-10', '10:30:00', 2, 1),
	(2,'2025-9-12', '12:00:00', 3, 1),
	(1,'2025-9-10', '13:40:00', 3, 1);

INSERT INTO payments(amount, date_of_payment, appointment_ID, user_ID) VALUES
	(5000,'2025-8-12 15:30:34', 2, 2),
	(1000,'2025-8-4 9:00:00', 3, 3),
	(3000,'2025-7-3 13:40:00', 1, 2);

SELECT * FROM roles;
SELECT * FROM users;
SELECT * FROM services;
SELECT * FROM Appointments;
SELECT * FROM payments;
GO

USE master
GO

DROP DATABASE PETSHOP
GO