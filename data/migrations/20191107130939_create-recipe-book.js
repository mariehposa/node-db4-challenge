
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments()
        table.string('recipe_name', 128)
    })
};

exports.down = function(knex) {
  
};
