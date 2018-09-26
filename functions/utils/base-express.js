const express = require('express');

module.exports = {
  createBaseExpress: function () {
    const baseExpress = express();

    // Do base configurations for express here

    return baseExpress;
  }
};
