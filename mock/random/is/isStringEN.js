export const enRegex = /^[a-zA-Z0-9 `~!@#$%^&*(){}[\]"':\\;/?.>,<|+=\-_]+$/;

export default function isStringEN(str) {
  return enRegex.test(str);
}
