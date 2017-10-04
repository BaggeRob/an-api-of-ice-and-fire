const { postcards } = require('./data');

const findPostcard = (id) =>
  postcards
    .filter(postcard => postcard.id == id)[0];

const findPostcards = () => postcards;

module.exports = {
  findPostcard,
  findPostcards,
};
