CREATE TABLE IF NOT EXISTS recipe(
  recipe_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  name VARCHAR(60),
  directions TEXT,
  rating INTEGER,
  source TEXT
)
