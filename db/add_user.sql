INSERT INTO users
(username, email, auth0_id)
VALUES
($1, $2, $3)
RETURNING *;
