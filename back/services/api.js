import dbConnection from "./dbConnection.js";

// récupérer tous les horaires
const getAllHours = async () => {
    const query = `
        SELECT horaire.*
        FROM medic.horaire;
    `;

    const [results] = await dbConnection.execute(query);
    return results;
}

// récupérer les horaires indisponibles dans une jnournée
const getNotAvailableHours = async () => {
    const query = `
        SELECT GROUP_CONCAT(rdv.horaire_id) AS list_horaires, rdv.daily, rdv.praticien_id, praticien.firstname, praticien.lastname
        FROM medic.rdv
        JOIN medic.praticien
        ON praticien.id = rdv.praticien_id
        WHERE rdv.daily = :day
        AND praticien.id = :idPraticien
        GROUP BY rdv.daily, rdv.praticien_id, praticien.firstname, praticien.lastname;
    `;

    const [results] = await dbConnection.execute(query, { day: '2023-12-01', idPraticien: 1 });
    return results;
}


export { getAllHours, getNotAvailableHours }