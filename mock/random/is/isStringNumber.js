const numRegex = /^-?([0-9]|[1-9][0-9]*)(.[0-9]+)?$/;

export default function isStringNumber(str) {
  return numRegex.test(str);
}
