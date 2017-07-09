exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {fName: 'Todd', lName: 'Drinkwater', organisation: 'TDD', email: 'todddrinkwaternz@gmail.com'},
          {fName: 'Blair', lName: 'Drinkwater', organisation: 'BDD', email: 'blaird@gmail.com'}
      ]);
    });
};
