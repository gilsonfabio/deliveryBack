exports.up = function(knex) {
    return knex.schema.createTable('workers', function(table) {
        table.increments('worId').primary();
        table.string('worName').notNullable();
        table.string('worEndereco').notNullable();
        table.string('worNumero').notNullable();
        table.string('worComplemento').notNullable();
        table.integer('worBairro').notNullable();
        table.integer('worCidade').notNullable();
        table.string('worUf').notNullable();
        table.string('worEmail').notNullable();
        table.string('worWhatsApp').notNullable();
        table.string('worUsuario').notNullable();
        table.string('worSenha').notNullable();
        table.string('worAvatar').notNullable();
        table.integer('worDeliveryId').notNullable();

        table.foreign('worBairro').references('disId').inTable('districts');
        table.foreign('worCidade').references('citId').inTable('citys');
        table.foreign('worUf').references('ufId').inTable('ufs');   
        table.foreign('worDeliveryId').references('delId').inTable('deliverys');  
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('workers');
};