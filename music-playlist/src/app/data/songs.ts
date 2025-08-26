export interface Song {
  id: number;
  name: string;
  artist: string;
  album: string;
  duration: string;
  rating: number;
  coverUrl: string;
}

export const SONGS: Song[] = [
  {
    id: 1,
    name: 'Butta Bomma',
    artist: 'Armaan Malik',
    album: 'Ala Vaikunthapurramuloo',
    duration: '3:30',
    rating: 4.8,
    coverUrl: 'https://picsum.photos/seed/butta/400/400'
  },
  {
    id: 2,
    name: 'Samajavaragamana',
    artist: 'Sid Sriram',
    album: 'Ala Vaikunthapurramuloo',
    duration: '4:05',
    rating: 4.7,
    coverUrl: 'https://picsum.photos/seed/samaja/400/400'
  },
  {
    id: 3,
    name: 'Mind Block',
    artist: 'Blaaze, Ranina Reddy',
    album: 'Sarileru Neekevvaru',
    duration: '3:45',
    rating: 4.5,
    coverUrl: 'https://picsum.photos/seed/mindblock/400/400'
  },
  {
    id: 4,
    name: 'Vachindamma',
    artist: 'Sid Sriram',
    album: 'Geetha Govindam',
    duration: '3:52',
    rating: 4.6,
    coverUrl: 'https://picsum.photos/seed/vachindamma/400/400'
  },
  {
    id: 5,
    name: 'Inkem Inkem Inkem Kaavaale',
    artist: 'Sid Sriram',
    album: 'Geetha Govindam',
    duration: '4:20',
    rating: 4.9,
    coverUrl: 'https://picsum.photos/seed/inkem/400/400'
  },
  {
    id: 6,
    name: 'Naatu Naatu',
    artist: 'Rahul Sipligunj, Kaala Bhairava',
    album: 'RRR',
    duration: '3:35',
    rating: 5.0,
    coverUrl: 'https://picsum.photos/seed/naatu/400/400'
  },
  {
    id: 7,
    name: 'Jai Lava Kusa (Title Song)',
    artist: 'Kaala Bhairava',
    album: 'Jai Lava Kusa',
    duration: '4:10',
    rating: 4.4,
    coverUrl: 'https://picsum.photos/seed/jlk/400/400'
  },
  {
    id: 8,
    name: 'Pilla Raa',
    artist: 'Anurag Kulkarni',
    album: 'RX 100',
    duration: '3:58',
    rating: 4.7,
    coverUrl: 'https://picsum.photos/seed/pillaraa/400/400'
  },
  {
    id: 9,
    name: 'Nee Kallalona',
    artist: 'Karthik',
    album: 'Jaya Janaki Nayaka',
    duration: '4:00',
    rating: 4.3,
    coverUrl: 'https://picsum.photos/seed/nee/400/400'
  },
  {
    id: 10,
    name: 'Seethakalam',
    artist: 'SP Balasubrahmanyam',
    album: 'Seethakalam',
    duration: '5:02',
    rating: 4.6,
    coverUrl: 'https://picsum.photos/seed/seethakalam/400/400'
  }
];