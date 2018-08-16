import {PHONE_NUMBER, EMAIL} from 'utils/validation';
const yup = require('yup');

export const schema = yup.object().shape({
  email: yup
    .string()
    .matches(EMAIL.scheme, EMAIL.message)
    .required('Primary email is required.'),
  phoneNumber: yup
    .string()
    .matches(PHONE_NUMBER.scheme, PHONE_NUMBER.message)
    .required('Primary number is required.'),
});
