INSERT INTO ingredient
(recipe_id, qty, measure, name)
VALUES
($1, $2, $3, $4)
RETURNING *;
