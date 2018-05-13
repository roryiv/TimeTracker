CREATE TABLE projects(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(240)
);

CREATE TABLE entries(
"id" SERIAL PRIMARY KEY,
"action" VARCHAR(900),
"start" TIMESTAMP,
"end" TIMESTAMP,
"duration" NUMERIC,
"project_id" INT REFERENCES projects
);

ALTER TABLE "public"."entries"
  DROP CONSTRAINT "entries_project_id_fkey",
  ADD CONSTRAINT "entries_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE;