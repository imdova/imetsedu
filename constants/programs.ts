export type ProgramType = {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
};

export const programsData: ProgramType[] = [
  {
    id: 1,
    title: 'Leadership Excellence',
    description: 'Develop essential leadership skills for the modern workplace.',
    duration: '12 weeks',
    price: '$1,999',
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    description: 'Master the latest digital marketing strategies and tools.',
    duration: '8 weeks',
    price: '$1,499',
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42',
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Learn to make data-driven decisions for business growth.',
    duration: '10 weeks',
    price: '$1,799',
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42',
  },
];

