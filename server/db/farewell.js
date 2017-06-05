const getFarewells = (db) => {
  return db('farewells')
    .select('*')
}

module.exports = {
  getFarewells
}
