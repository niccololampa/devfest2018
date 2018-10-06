const baseExpress = require('../../utils/base-express.js');

module.exports = function () {
  const userExpress = baseExpress.createBaseExpress();

  // Get All
  userExpress.get('/', (req, res) => {
    res.status(200).send('Getting all users');
  });

  // Get One
  userExpress.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).send('Getting user with user id: ' + userId);
  });

  // Create
  userExpress.post('/', (req, res) => {
    res.status(200).send('Creating user');
  });

  // Update
  userExpress.put('/:id', (req, res) => {
    res.status(200).send('Updating user');
  });

  // Delete
  userExpress.delete('/:id', (req, res) => {
    res.status(200).send('Deleting user');
  });

  return userExpress;
};
