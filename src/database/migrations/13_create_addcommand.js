exports.up = function(knex) {
    return knex.schema.createTable('addcommands', function(table) {
        table.increments('adcId').primary();
        table.integer('adcCommandId').notNullable();
        table.integer('adcIteCommandId').notNullable();
        table.integer('adcAddicionalId').notNullable();
        table.decimal('adcVlrAddicional').notNullable();

        table.foreign('adcCommandId').references('comId').inTable('commands');
        table.foreign('adcIteCommandId').references('itcId').inTable('itecommands');
        table.foreign('adcAddicionalId').references('addId').inTable('addicionals');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('addcommands');
};
