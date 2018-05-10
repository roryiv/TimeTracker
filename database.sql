CREATE TABLE projects(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(240),
"total_hours" INT
);

CREATE TABLE entries(
"id" SERIAL PRIMARY KEY,
"action" VARCHAR(900),
"start" TIMESTAMP,
"end" TIMESTAMP,
"project_id" INT REFERENCES projects
);