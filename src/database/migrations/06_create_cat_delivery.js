exports.up = function(knex) {
    return knex.schema.createTable('catDelivery', function(table) {
        table.increments('ctdId').primary();
        table.integer('ctdDeliveryId').notNullable();
        table.integer('ctdCategoryId').notNullable();
        table.foreign('ctdDeliveryId').references('delId').inTable('deliverys');
        table.foreign('ctdCategoryId').references('catId').inTable('categorys');      
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('catDelivery');
};
  