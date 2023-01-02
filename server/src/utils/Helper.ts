// eslint-disable-next-line @typescript-eslint/no-var-requires
const Hashids = require('hashids/cjs');
import * as fs from 'fs';

export const generateID = (count: number) => {
  const sym = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  let str = '';

  for (let i = 0; i < count; i++) {
    const idx = Math.random() * sym.length;

    str += sym.charAt(idx);
  }

  return str;
};

const hashIdsMap: { [key: string]: any } = {};

const getHashIds = (key: string): any => {
  if (key in hashIdsMap) {
    return hashIdsMap[key.toString()];
  }

  const instance = new Hashids(key + '-' + 'l7y4hac4JHaiBkrd52aDASvZSI42vh3J', 10);

  hashIdsMap[key.toString()] = instance;

  return instance;
};

export const hashIdEncode = (key: string, id: number): string => {
  const hashids = getHashIds(key);

  return hashids.encode(id);
};

export const hashIdDecode = (key: string, hashId: string): number | bigint | undefined => {
  const hashids = getHashIds(key);
  const ret = hashids.decode(hashId);

  return ret.length > 0 ? ret[0] : null;
};

export const getDirectories = (source) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getFilesFromDirectory = (source) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

export function toArrayBuffer(buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}