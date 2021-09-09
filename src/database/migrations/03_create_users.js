exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('usrId').primary();
        table.string('usrName').notNullable();
        table.string('usrEndereco').notNullable();
        table.string('usrNumero').notNullable();
        table.string('usrComplemento').notNullable();
        table.integer('usrBairro').notNullable();
        table.integer('usrCidade').notNullable();
        table.string('usrUf').notNullable();
        table.string('usrEmail').notNullable();
        table.string('usrWhatsApp').notNullable();
        table.string('usrUsuario').notNullable();
        table.string('usrSenha').notNullable();
        table.string('usrAvatar').notNullable();

        table.foreign('usrBairro').references('disId').inTable('districts');
        table.foreign('usrCidade').references('citId').inTable('citys');
        table.foreign('usrUf').references('ufId').inTable('ufs');     
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  