export function splitAtFirstNumber(str) {
  const index = str.search(/\d/);
  if (index === -1) {
    return [str];
  }
  return [str.slice(0, index), str.slice(index)];
}