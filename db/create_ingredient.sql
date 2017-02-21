CREATE TABLE IF NOT EXISTS ingredient(
  ingred_id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipe(recipe_id),
  qty REAL,
  measure VARCHAR(25),
  name VARCHAR(60)
)
