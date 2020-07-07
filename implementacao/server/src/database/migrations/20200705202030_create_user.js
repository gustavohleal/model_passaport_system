exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('passwd').notNullable();
      table.string('cpf', 11).notNullable();
      table.string('rg', 10).notNullable();
      table.string('cep', 8).notNullable();
      table.string('address').notNullable();
      table.string('phone').notNullable();
      table.date('birthday')
      table.boolean('seguroGarantido')
      table.boolean('student')
        

      table.unique('email');
      table.unique('cpf');
      table.unique('rg');
    });
  };
  
  exports.down = function(knex) {
   return knex.schema.dropTable('users');
  };