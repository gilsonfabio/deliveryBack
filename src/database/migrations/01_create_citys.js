exports.up = function(knex) {
    return knex.schema.createTable('citys', function(table) {
        table.increments('citId').primary();
        table.string('citDescricao').notNullable();
        table.string('citUf').notNullable();
        table.foreign('citUf').references('ufId').inTable('ufs');     
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('citys');
  };
  