exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {id: 1, user_id: 1, contract_header: 'Dishes', contract_desc: 'I will clean the dishes for a week.', signature_url: '', date_signed: '', isSigned: false},
        {id: 2, user_id: 1, contract_header: 'Garbage', contract_desc: 'I will take out the garbage.', signature_url: '', date_signed: '', isSigned: false},
        {id: 3, user_id: 2, contract_header: 'Legend', contract_desc: 'I agree that Todd is an absolute legend.', signature_url: '', date_signed: '', isSigned: false}
      ]);
    });
};
