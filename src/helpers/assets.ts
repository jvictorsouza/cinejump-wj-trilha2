const { PUBLIC_URL } = process.env;

export const Assets = (path: string) => {
  return `${PUBLIC_URL}${path}`;
};
