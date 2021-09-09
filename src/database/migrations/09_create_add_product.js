exports.up = function(knex) {
    return knex.schema.createTable('addproducts', function(table) {
        table.increments('adpId').primary();
        table.integer('adpProductId').notNullable();
        table.integer('adpAddicionalId').notNullable();
        table.foreign('adpProductId').references('proId').inTable('products');
        table.foreign('adpAddicionalId').references('addId').inTable('addicionals');      
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('addproducts');
};