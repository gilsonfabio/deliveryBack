exports.up = function(knex) {
    return knex.schema.createTable('districts', function(table) {
        table.increments('disId').primary();
        table.string('disDescricao').notNullable();
        table.integer('disCity').notNullable();
        table.foreign('disCity').references('citId').inTable('citys');     
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('districts');
  };
  