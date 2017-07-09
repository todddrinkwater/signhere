exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {owner_id: 1, signee_id: 2, contract_header: 'Rugby Coaching Position', contract_desc: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.', signature_url: '', date_signed: '', isSigned: false},
        {owner_id: 1, signee_id: 2, contract_header: 'Arts Perfomance', contract_desc: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.', signature_url: '', date_signed: '', isSigned: false},
        {owner_id: 2, signee_id: 1, contract_header: 'Field Trip', contract_desc: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.', signature_url: '', date_signed: '', isSigned: false}
      ]);
    });
};
