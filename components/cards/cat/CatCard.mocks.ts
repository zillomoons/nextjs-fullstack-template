import { ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'Felines',
  title: `What's new in Cats`,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author: 'Alex',
  time: '2h ago',
};

export const mockCatCardProps = {
  base,
};
