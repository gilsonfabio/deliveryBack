exports.up = function(knex) {
    return knex.schema.createTable('commands', function(table) {
        table.increments('comId').primary();
        table.dateTime('comDatPedido').notNullable();
        table.string('comHorPedido').notNullable();
        table.string('comIniPreparo').notNullable();
        table.string('comFimPreparo').notNullable();
        table.string('comIniEntrega').notNullable();
        table.string('comFimEntrega').notNullable();
        table.decimal('comVlrTotal').notNullable();
        table.decimal('comVlrDesconto').notNullable();
        table.decimal('comVlrPagar').notNullable();
        table.string('comTipPagto').notNullable();
        table.decimal('comTroco').notNullable();
        table.integer('comUserId').notNullable();
        table.integer('comCourierId').notNullable();
        table.string('comStatus').notNullable();

        table.foreign('comUserId').references('usrId').inTable('users');
        table.foreign('comCourierId').references('couId').inTable('couriers');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('commands');
};
