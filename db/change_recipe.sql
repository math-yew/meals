UPDATE recipe
 SET
  name = COALESCE($2, name),
  directions = COALESCE($3, directions),
  rating = COALESCE($4, rating),
  source = COALESCE($5, source)
WHERE recipe_id = $1
RETURNING *;
