INSERT INTO recipe
(name, directions, rating, source)
VALUES
($1, $2, $3, $4)
RETURNING recipe_id;
