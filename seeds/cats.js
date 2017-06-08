
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Hello There', colour: 'red', about: 'likes tuna'},
        {id: 2, name: 'Greetings Friend', colour: 'blue', about: 'kitten'},
        {id: 3, name: 'Well Met', colour: 'yellow', about: 'hates things'}
      ]);
    });
};
