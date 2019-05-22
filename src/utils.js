import LZString from './lz-string';

const getMin = (arr, val) => arr.reduce((min, p) => (
  Number(p[val]) < Number(min[val]) ? p : min
), arr[0]);
const getMax = (arr, val) => arr.reduce((max, p) => (
  Number(p[val]) > Number(max[val]) ? p : max
), arr[0]);
const getTime = (date, extra, locale = 'en-US') => date.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', ...extra });
const getMilli = hours => (hours * 60 ** 2 * 10 ** 3);

const compress = (data) => { return LZString.compress(JSON.stringify(data)); }

const uncompress = (data) => { return typeof data === 'string' ? JSON.parse(LZString.decompress(data)) : data; }

export {
  getMin,
  getMax,
  getTime,
  getMilli,
  compress,
  uncompress
};
