
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('farewells').del()
    .then(function () {
      // Inserts seed entries
      return knex('farewells').insert([
        {id: 1, text: 'Goodbye'},
        {id: 2, text: 'See ya Friend'},
        {id: 3, text: 'Laters'}
      ]);
    });
};
