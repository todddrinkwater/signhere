
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {id: 1, user_id: 1, contract_desc: 'I will clean the dishes for a week.', signature_url: 'http://www.yogibedroom.com/wp-content/uploads/2013/05/jooe_k_signature.png', date_signed: '', isSigned: false},
        {id: 2, user_id: 1, contract_desc: 'I will take out the garbage.', signature_url: 'http://www.mtel-kh.com/wp-content/uploads/2012/01/blue-signature.png', date_signed: '', isSigned: false},
        {id: 3, user_id: 2, contract_desc: 'I agree that Todd is an absolute legend.', signature_url: 'http://4.bp.blogspot.com/-PFN93k5bW6I/Ta_wbSg_r1I/AAAAAAAAABw/qPZlR2Kmqx8/s1600/signature.jpg', date_signed: '', isSigned: false}
      ]);
    });
};
