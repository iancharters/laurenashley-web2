export const POSTAL_CODE = {
  scheme: /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][ ]?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])|(^\d{5}$)|(^\d{5}-\d{4}$)/i,
  message: {message: 'Invalid format.'},
};

export const COUNTRY = {
  scheme: /^(?:CA|US)|$/,
  message: {message: 'Country must be CA or US'},
};

export const PHONE_NUMBER = {
  scheme: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  message: {message: 'Invalid format.'},
};

export const EMAIL = {
  scheme: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: {message: 'Invalid format.'},
};
