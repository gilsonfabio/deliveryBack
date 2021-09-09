exports.up = function(knex) {
    return knex.schema.createTable('addicionals', function(table) {
      table.increments('addId').primary();
      table.string('addDescricao').notNullable();  
      table.integer('addDeliveryId').notNullable();
      table.foreign('addDeliveryId').references('delId').inTable('deliverys');    
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('addicionals');
};