SELECT specialty.name
FROM  medic.specialty
WHERE specialty.name  LIKE 'p%'
-- WHERE specialty.name  LIKE '%s%'
-- WHERE specialty.name  LIKE '%ss%';
-- WHERE specialty.name  LIKE '%l';
-- WHERE specialty.name  LIKE 'w%';
ORDER BY specialty.name 
LIMIT 6;

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




