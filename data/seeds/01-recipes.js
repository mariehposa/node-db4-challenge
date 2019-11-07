
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Boiled Rice'},
    {recipe_name: 'Boiled Beans'},
    {recipe_name: 'Boiled Yam'}
  ]);
};
