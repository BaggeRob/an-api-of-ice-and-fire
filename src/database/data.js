const messages = [
  {
    id: 1,
    message: 'Readymade kinfolk pok pok palo santo four dollar toast offal. Put a bird on it pickled sartorial everyday carry, chillwave gastropub VHS. Plaid disrupt fixie marfa four loko, mustache kombucha fanny pack keytar neutra deep v gluten-free try-hard. Cold-pressed beard try-hard leggings messenger bag copper mug. ',
    recipient: {
      id: 2,
      firstName: 'Bronn',
      lastName: 'of the Blackwater',
      occupation: 'Sellsword',
      address: {
        building: 'The Red Keep',
        street: 'Dragon\'s Way',
        townCity: 'King\'s Landing',
        county: 'Crownlands',
        postcode: 'EC1 PE2',
      },
    }
  },
  {
    id: 2,
    message: 'Green juice hoodie next level occupy, health goth schlitz cold-pressed roof party chillwave. Chambray irony knausgaard 8-bit bitters keytar helvetica cold-pressed. Vinyl chillwave kogi, raclette vape tousled you probably haven\'t heard of them activated charcoal.',
    recipient: {
      id: 1,
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      occupation: 'Queen?',
      address: {
        building: 'The big pyramid',
        street: 'Pyramid Street',
        townCity: 'Meereen',
        county: 'Essos',
        postcode: 'W12 3LD',
      }
    },
  }];

const contacts = [
  {
    id: 1,
    firstName: 'Bronn',
    lastName: 'of the Blackwater',
    occupation: 'Sellsword',
    address: {
      building: 'The Red Keep',
      street: 'Dragon\'s Way',
      townCity: 'King\'s Landing',
      county: 'Crownlands',
      postcode: 'EC1 PE2',
    },
  },
  {
    id: 2,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    address: {
      building: 'Dragonstone',
      street: 'What roads?',
      townCity: 'Dragonstone',
      county: 'Crownlands',
      postcode: 'W12 3LD',
    }
  }];

module.exports = {
  messages,
  contacts,
};
