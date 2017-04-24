exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function (table) {
    table.increments('id')
    table.integer('user_id')
    table.string('contract_header')
    table.string('contract_desc')
    table.string('signature_url')
    table.dateTime('date_signed')
    table.boolean('isSigned')
  })
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts')
};
