exports.up = function(knex) {
    return knex.schema.createTable('promocoes', function(table) {
        table.increments('prmId').primary();
        table.integer('prmProductId').notNullable();
        table.string('prmUrlphoto').notNullable();        

        table.foreign('prmProductId').references('proId').inTable('products');        
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('promocoes');
};