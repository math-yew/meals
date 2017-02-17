CREATE TABLE IF NOT EXISTS ingredient(
  ingred_id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES users(user_id),
  name VARCHAR(60),
  qty REAL,
  measure VARCHAR(25)
)
