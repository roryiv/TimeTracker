const router = require('express').Router();
const pool = require('../modules/database');

router.get('/', (req, res) => {
    pool.query(`SELECT "name", COALESCE(SUM(entries."duration"), 0) AS "total_hours"
    FROM entries
    RIGHT JOIN projects ON entries."project_id" = projects."id"
    GROUP BY "name";`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log(`error selecting from projects: ${error}`)
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const queryText = `INSERT INTO projects("name")
    VALUES ($1);`;
    console.log(req.body);
    pool.query(queryText, [req.body.name])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`error inserting into projects: ${error}`);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM projects WHERE "id" = ($1);`, [req.query.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error deleting project: ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;