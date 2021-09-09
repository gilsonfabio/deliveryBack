exports.up = function(knex) {
    return knex.schema.createTable('itecommands', function(table) {
        table.increments('itcId').primary();
        table.integer('itcCommandId').notNullable();
        table.integer('itcProductId').notNullable();
        table.decimal('itcVlrProduto').notNullable();

        table.foreign('itcCommandId').references('comId').inTable('commands');
        table.foreign('itcProductId').references('proId').inTable('products');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('itecommands');
};
