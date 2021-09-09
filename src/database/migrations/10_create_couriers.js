exports.up = function(knex) {
    return knex.schema.createTable('couriers', function(table) {
        table.increments('couId').primary();
        table.string('couName').notNullable();
        table.string('couEndereco').notNullable();
        table.string('couNumero').notNullable();
        table.string('couComplemento').notNullable();
        table.integer('couBairro').notNullable();
        table.integer('couCidade').notNullable();
        table.string('couUf').notNullable();
        table.string('couEmail').notNullable();
        table.string('couWhatsApp').notNullable();
        table.string('couUsuario').notNullable();
        table.string('couSenha').notNullable();
        table.string('couAvatar').notNullable();

        table.foreign('couBairro').references('disId').inTable('districts');
        table.foreign('couCidade').references('citId').inTable('citys');
        table.foreign('couUf').references('ufId').inTable('ufs');     
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('couriers');
};
  