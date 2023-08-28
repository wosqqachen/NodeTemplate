export const userCounter = () => {
  return useState('counter', () => 0);
};
