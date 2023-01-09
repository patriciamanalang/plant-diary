// require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

app.use(express.json());

app.post('/plants/add', (req, res, next) => {
  const { plantName } = req.body;
  const sql = `
    INSERT INTO "plants" ( "plantName", "userId")
    VALUES ($1, $2)
    RETURNING *
  `;
  const params = [plantName, 1];
  db.query(sql, params)
    .then(result => {
      const [newPlant] = result.rows;
      res.status(201).json(newPlant);
    })
    .catch(err => next(err));
});

app.get('/plants', (req, res, next) => {
  const sql = `
    select "plantName"
    from "plants"
  `;
  db.query(sql)
    .then(result => {
      const plants = result.rows;
      res.status(200).json(plants);
    })
    .catch(err => next(err));
});

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
