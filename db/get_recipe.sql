SELECT recipe.*, recipe.name AS rname, ingredient.* FROM recipe
LEFT JOIN ingredient
ON recipe.recipe_id = ingredient.recipe_id
where recipe.recipe_id = $1
