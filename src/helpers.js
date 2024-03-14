import Fuse from 'fuse.js';

export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16733259)
    .toString(16)
    .padStart(6, 0)}`;
};

export const searchFuse = (arr, value) => {
  const options = {
    includeScore: true,
    keys: ['name', 'number'],
    threshold: 0.3,
  };
  const fuse = new Fuse(arr, options);

  return fuse.search(value);
};
