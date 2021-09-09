exports.up = function(knex) {
    return knex.schema.createTable('ufs', function(table) {
      table.string('ufId').primary();
      table.string('ufDescricao').notNullable();      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ufs');
  };
  