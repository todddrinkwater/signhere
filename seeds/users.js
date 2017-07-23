exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {fName: 'Todd', lName: 'Drinkwater', organisation: 'Company', email: 'todd@drinkwater.com', street_address: '70 King St', 'suburb': 'Kelburn', phone: 027027027, 'user_image_url': 'http://res.cloudinary.com/hpyyiawap/image/upload/c_crop,h_2055,w_2607/v1500794318/IMG_8175_r8qioz.jpg'},
          {fName: 'Blair', lName: 'Drinkwater', organisation: 'Catch22', email: 'blair@drinkwater.com', street_address: '70 Prince St', 'suburb': 'Ngunguru',  phone: 021021021, 'user_image_url': ''}
      ]);
    });
};
