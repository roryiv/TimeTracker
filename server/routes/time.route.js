const router = require('express').Router();
const pool = require('../modules/database');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM entries;`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log(`error selecting from entries: ${error}`)
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const queryText = `INSERT INTO entries("action", "start", 
    "end", "duration", "project_id")
    VALUES ($1, $2, $3, $4, $5);`;
    console.log(req.body);
    pool.query(queryText,
        [req.body.action, req.body.start, req.body.end,
        req.body.duration, req.body.project_id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error inserting into entries: ${error}`);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM entries WHERE "id" = ($1);`, [req.query.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error deleting entry: ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;