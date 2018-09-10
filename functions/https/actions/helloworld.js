const baseExpress = require('./../base-express.js');

module.exports = function () {
  const helloWorldExpress = baseExpress.createBaseExpress();

  helloWorldExpress.get('/', (req, res) => {
    res.status(200).send("Hello World")
  });

  return helloWorldExpress;
}