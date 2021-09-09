exports.up = function(knex) {
    return knex.schema.createTable('categorys', function(table) {
      table.increments('catId').primary();
      table.string('catDescricao').notNullable();      
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('categorys');
};