exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function (table) {
    table.increments('id')
    table.integer('owner_id')
    table.integer('signee_id')
    table.string('contract_header')
    table.string('contract_desc')
    table.string('signature_url')
    table.string('date_signed')
    table.boolean('isSigned')
  })
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts')
};
