exports.up = function(knex) {
    return knex.schema.createTable('deliverys', function(table) {
        table.increments('delId').primary();
        table.string('delRazao').notNullable();
        table.string('delNomFantasia').notNullable();
        table.string('delEndereco').notNullable();
        table.string('delNumero').notNullable();
        table.string('delComplemento').notNullable();
        table.integer('delBairro').notNullable();
        table.integer('delCidade').notNullable();
        table.string('delUf').notNullable();
        table.string('delEmail').notNullable();
        table.string('delWhatsApp').notNullable();
        table.string('delUsuario').notNullable();
        table.string('delSenha').notNullable();
        table.string('delResponsavel').notNullable();
        table.string('delUrlphoto').notNullable();

        table.foreign('delBairro').references('disId').inTable('districts');
        table.foreign('delCidade').references('citId').inTable('citys');
        table.foreign('delUf').references('ufId').inTable('ufs');     
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('deliverys');
  };
  