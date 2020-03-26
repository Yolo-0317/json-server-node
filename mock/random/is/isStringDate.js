export const dateRegex = /^([1-9][0-9])?[0-9]{2}[^0-9]*[0-9]{2}[^0-9]*[0-9]{2}([^0-9]*[0-9]{2}[^0-9]*[0-9]{2}([^0-9]*[0-9]{2})?)?$/;

export default function isStringDate(str) {
  return dateRegex.test(str);
}
