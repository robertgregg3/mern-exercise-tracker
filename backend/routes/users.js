const router = require('express').Router(); // to create the route we are making
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find() // command to get the users from the data base
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  // create a new instance of a user from the user model using the username
  // the user model requires just a username in the schema
  const newUser = new User({username});

  // save the user to the database
  newUser.save()
    .then(() => res.json('User added!')) // when saved return user added
    .catch(err => res.status(400).json('Error: ' + err)); // or return an error
});

module.exports = router;