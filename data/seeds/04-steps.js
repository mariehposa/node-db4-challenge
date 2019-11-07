
exports.seed = function(knex) {
  return knex('steps').insert([
    {recipe_id: 1, step_number: 1, Instruction: 'Boil rice'},
    {recipe_id: 1, step_number: 2, Instruction: 'add salt'},
    {recipe_id: 1, step_number: 3, Instruction: 'add oil'}
  ]);
};
