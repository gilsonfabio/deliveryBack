exports.up = function(knex) {
    return knex.schema.createTable('token', function(table) {
        table.increments('tokId').primary();
        table.string('token').notNullable();
        table.string('tokStatus').notNullable();        
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('token');
};