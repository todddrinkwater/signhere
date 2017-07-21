exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('fName')
    table.string('lName')
    table.integer('phone')
    table.string('email')
    table.string('street_address')
    table.string('suburb')
    table.string('organisation')
    table.string('user_image_url')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
