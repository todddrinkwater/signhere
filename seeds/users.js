
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, fName: 'Todd', lName: 'Drinkwater', organisation: 'TDD', email: 'todddrinkwaternz@gmail.com', contract_id: 1, hash: ''},
          {id: 2, fName: 'Blair', lName: 'Drinkwater', organisation: 'BDD', email: 'blaird@gmail.com', contract_id: 2, hash: ''}
      ]);
    });
};
