
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('fName')
    table.string('lName')
    table.string('organisation')
    table.string('email')
    table.integer('contact_id')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
