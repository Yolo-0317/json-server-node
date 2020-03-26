import randomSafeInteger from '../randomSafeInteger';

export default function randomStringNumber(min, max) {
  return `${randomSafeInteger(min, max)}`;
}
