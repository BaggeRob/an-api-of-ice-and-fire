const messages = [
  {
    _links: {
      discover: {
        href: '/',
      },
      self: {
        href: '/messages/1',
      },
      recipient: {
        href: '/contacts/2'
      },
    },
    id: 1,
    message: 'Readymade kinfolk pok pok palo santo four dollar toast offal. Put a bird on it pickled sartorial everyday carry, chillwave gastropub VHS. Plaid disrupt fixie marfa four loko, mustache kombucha fanny pack keytar neutra deep v gluten-free try-hard. Cold-pressed beard try-hard leggings messenger bag copper mug. ',
  },
  {
    _links: {
      discover: {
        href: '/',
      },
      self: {
        href: '/messages/2',
      },
      recipient: {
        href: '/contacts/1'
      },
    },
    id: 2,
    message: 'Green juice hoodie next level occupy, health goth schlitz cold-pressed roof party chillwave. Chambray irony knausgaard 8-bit bitters keytar helvetica cold-pressed. Vinyl chillwave kogi, raclette vape tousled you probably haven\'t heard of them activated charcoal.',
  }];

const contacts = [
  {
    _links: {
      discover: {
        href: '/',
      },
      self: {
        href: '/contacts/2',
      },
      address: {
        href: '/addresses/2',
      },
    },
    id: 1,
    firstName: 'Bronn',
    lastName: 'of the Blackwater',
    occupation: 'Sellsword',
  },
  {
    _links: {
      discover: {
        href: '/',
      },
      self: {
        href: '/contacts/1',
      },
      address: {
        href: '/addresses/1',
      },
    },
    id: 2,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    occupation: 'Queen?',
  }];

const addresses = [
  {
    _links: {
      discover: {
        href: '/',
      },
      self: {
        href: '/addresses/1',
      },
    },
    id: 1,
    building: 'Dragonstone',
    street: 'What roads?',
    townCity: 'Dragonstone',
    county: 'Crownlands',
    postcode: 'W12 3LD',
  },
  {
    _links: {
      discover: {
        href: '/',
      },
      self: {
        href: '/addresses/2',
      },
    },
    id: 2,
    building: 'The Red Keep',
    street: 'Dragon\'s Way',
    townCity: 'King\'s Landing',
    county: 'Crownlands',
    postcode: 'EC1 PE2',
  }];

module.exports = {
  messages,
  contacts,
  addresses,
};
