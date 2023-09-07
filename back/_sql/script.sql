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
(NULL, '09:00:00'),
(NULL, '09:30:00'),
(NULL, '10:00:00'),
(NULL, '10:30:00'),
(NULL, '11:00:00'),
(NULL, '11:30:00'),
(NULL, '12:00:00'),
(NULL, '12:30:00'),
(NULL, '13:00:00'),
(NULL, '13:30:00'),
(NULL, '14:00:00'),
(NULL, '14:30:00'),
(NULL, '15:00:00'),
(NULL, '15:30:00'),
(NULL, '16:00:00'),
(NULL, '16:30:00'),
(NULL, '17:00:00'),
(NULL, '17:30:00'),
(NULL, '18:00:00'),
(NULL, '18:30:00'),
(NULL, '19:00:00')
;

INSERT INTO medic.praticien
values
(NULL, 'tito','KABO','2 RUA PARIS','tito@gmail.com','batoi','photo1.png'),
(NULL, 'jena','TOTO','4 RUA Auguste Renoir','jena@gmail.com','AB113','photo1.png'),
(NULL, 'David','ANTOINE','3 RUA Aristide Briand','David@gmail.com','Dav345','photo1.png')
;

INSERT INTO medic.patient
values
(NULL, 'Roger','FRANSNEL','1999-10-01','1 RUA des Lilas','tito@gmail.com','roger19'),
(NULL, 'Fathi','ASIF','1996-11-02','8 RUA Thibaud','jena@gmail.com','AER113'),
(NULL, 'Lon','SOLANO','1999-12-10','5 RUA  Briand','David@gmail.com','DLon345')
;

-- patient / praticien / horaire
INSERT INTO medic.rdv
values
(NULL,'2023-12-01',1,2, 5),
(NULL,'2023-10-01',2,1, 10),
(NULL,'2023-09-01',3,3, 1)
;

INSERT INTO medic.specialty_praticien
values
    (10, 1),
    (12, 2),
    (15, 2),
    (1, 3),
    (5, 3),
    (12, 3)
;
