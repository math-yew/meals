CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  auth0_id VARCHAR(100),
  username VARCHAR(50),
  email VARCHAR(100)
)
