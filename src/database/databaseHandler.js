const { data } = require('./data');

const findPostcard = (id) =>
  data
    .filter(postcard => postcard.id == id)[0];

const findPostcards = () => data;

module.exports = {
  findPostcard,
  findPostcards,
};
