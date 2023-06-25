const isDev = process.env.NODE_ENV === 'development';

export const NUM_CARDS: number = isDev ? 100 : 1000;
