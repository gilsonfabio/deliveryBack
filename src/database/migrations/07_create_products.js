exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments('proId').primary();
        table.string('proTitulo').notNullable();
        table.string('proSubTitulo').notNullable();
        table.string('proDescricao').notNullable();
        table.string('proUrlphoto').notNullable();
        table.decimal('proPrecoBase').notNullable();
        table.string('proStatus').notNullable();
        table.integer('proDeliveryId').notNullable();
        table.foreign('proDeliveryId').references('delId').inTable('deliverys');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
