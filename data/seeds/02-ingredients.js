
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {Ingredient_name: 'water'},
    {Ingredient_name: 'Salt'},
    {Ingredient_name: 'oil'}
  ]);
};
