INSERT INTO recipe
(name, directions, rating, source, user_id)
VALUES
($1, $2, $3, $4, $5)
RETURNING recipe_id;
