
exports.seed = function(knex) {
  return knex('quantity').insert([
    {recipe_id: 1, ingredient_id: 1, quantity: 2.34},
    {recipe_id: 1, ingredient_id: 2, quantity: 7.54},
    {recipe_id: 2, ingredient_id: 3, quantity: 3.34}
  ]);
};
