DROP DATABASE IF EXISTS medic;

CREATE DATABASE medic;

CREATE TABLE medic.specialty(
id TINYINT(2) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE medic.horaire(
id TINYINT(2) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
hours TIME NOT NULL
);

CREATE TABLE medic.patient(
id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(50) NOT NULL,
birthday    DATE,
addersse VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR (50) NOT NULL
);

CREATE TABLE medic.praticien(
id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(50) NOT NULL,
addersse VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR (50) NOT NULL,
image VARCHAR (50) NOT NULL  
);

CREATE TABLE medic.specialty_praticien(
   specialty_id TINYINT(2) UNSIGNED NOT NULL,
   praticien_id SMALLINT UNSIGNED NOT NULL, 
    FOREIGN KEY(specialty_id) REFERENCES medic.specialty(id),
    FOREIGN KEY( praticien_id) REFERENCES medic.praticien(id),
    PRIMARY KEY(specialty_id, praticien_id) 
);


CREATE TABLE medic.rdv(
id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
daily DATE NOT NULL, 
patient_id MEDIUMINT UNSIGNED NOT NULL,
FOREIGN KEY(patient_id) REFERENCES medic.patient(id),
praticien_id SMALLINT UNSIGNED NOT NULL,
FOREIGN KEY(praticien_id) REFERENCES medic.praticien(id),
horaire_id TINYINT(2) UNSIGNED NOT NULL,
FOREIGN KEY(horaire_id) REFERENCES medic.horaire(id) 
);



INSERT INTO medic.specialty
values
(NULL, 'Anesthésiologie'),
(NULL, 'Cardiologie'),
(NULL, 'Dermatologie'),
(NULL, 'Endocrinologie'),
(NULL, 'Gastro-entérologie'),
(NULL, 'Gynécologie'),
(NULL, 'Hématologie'),
(NULL, 'Infectiologie '),
(NULL, 'Médecine interne '),
(NULL, 'Néphrologie'),
(NULL, 'Neurologie'),
(NULL, 'Oncologie'),
(NULL, 'Ophtalmologie '),
(NULL, 'Orthopédie'),
(NULL, 'Oto-rhino-laryngologie'),
(NULL, 'Pédiatrie'),
(NULL, 'Psychiatrie'),
(NULL, 'Rhumatologie'),
(NULL, 'Médecine du sport'),
(NULL, "Médecine d'urgence"),
(NULL, 'Médecine légale'),
(NULL, 'Médecine nucléaire'),
(NULL, 'Médecine physique et de réadaptation'),
(NULL, 'Médecine tropicale '),
(NULL, 'Médecine généraliste')
;



INSERT INTO medic.horaire
values
(NULL, '08:00:00'),
(NULL, '08:30:00'),
(NULL, '09:00:00')
;