-- SELECT specialty.name
-- FROM  medic.specialty
-- WHERE specialty.name  LIKE 'p%'
-- -- WHERE specialty.name  LIKE '%s%'
-- -- WHERE specialty.name  LIKE '%ss%';
-- -- WHERE specialty.name  LIKE '%l';
-- -- WHERE specialty.name  LIKE 'w%';
-- ORDER BY specialty.name 
-- LIMIT 6;

-- SELECT
--     rdv.daily,
--     patient.lastname AS patient_lastname,
--     praticien.lastname AS praticien_lastname,
--     horaire.hours
-- FROM medic.rdv
-- JOIN medic.patient
-- ON patient.id = rdv.patient_id 
-- JOIN medic.praticien
-- ON praticien.id  = rdv.praticien_id
-- JOIN medic.horaire
-- ON horaire.id = rdv.horaire_id
-- ;

-- SELECT
--     rdv.daily,
--     patient.lastname AS patient_lastname,
--     praticien.lastname AS praticien_lastname,
--     horaire.hours
-- FROM medic.rdv
-- JOIN medic.patient
-- ON patient.id = rdv.patient_id 
-- JOIN medic.praticien
-- ON praticien.id  = rdv.praticien_id
-- JOIN medic.horaire
-- ON horaire.id = rdv.horaire_id
-- WHERE patient.id = 1
-- ;

SELECT
    GROUP_CONCAT(specialty.name) AS specialities,
    praticien.lastname
FROM
    medic.specialty
JOIN
    medic.praticien
JOIN
    medic.specialty_praticien
ON
    specialty_praticien.specialty_id = specialty.id
AND
    specialty_praticien.praticien_id = praticien.id
GROUP BY
    praticien.id
;





/*
SELECT specialty.name
FROM medic.specialty
ORDER BY specialty.name 
-- ORDER BY specialty.name DESC;
LIMIT 6;*/



/*SELECT rdv.*
FROM medic.rdv
JOIN medic.patient
ON specialty.patient_id = patient.id 

JOIN medic.praticien
ON specialty.praticien_id  = praticien.id


JOIN medic.horaire
ON specialty.horaire_id = horaire.id;*/



-- SELECT specialty.* , praticien.firstname AS praticien_name
-- FROM medic.specialty
-- JOIN medic.praticien




-- SELECT
--  student.hours,
--  GROUP_CONCAT() AS 
























-- ON specialty.praticien_id  = classroom.id;


