const postcards = [
  {
    id: 1,
    text: 'Lorem ipsum 1',
    receiver: {
      firstName: 'Lelah',
      lastName: 'Marks',
      address: {
        building: '76-78',
        street: 'Wardour Street',
        townCity: 'London',
        county: undefined,
        postcode: 'W1F 0UR',
      },
    }
  },
  {
    id: 2,
    text: 'Lorem ipsum 2',
    receiver: {
      firstName: 'Carolina',
      lastName: 'Skiles',
      address: {
        building: 'TOG',
        street: 'Old Street',
        townCity: 'London',
        county: undefined,
        postcode: 'EC1 GP1',
      }
    },
  }];

module.exports = {
  postcards,
};
