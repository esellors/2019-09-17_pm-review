let puppers = [
   {
      id: 0,
      name: 'Goodboyie',
      breed: 'Pom Pom',
      age: 3
   },
   {
      id: 1,
      name: 'Goodgyrle',
      breed: 'Chihuahua',
      age: 1
   },
   {
      id: 2,
      name: 'TBD',
      breed: 'Mutt',
      age: -1
   }
];

module.exports = {
   getPuppers: (req, res) => {
      res.status(200).json(puppers)
   }
}