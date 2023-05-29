interface User {
  username: string;
  age: number;
  heightCM?: number;
  weightKG?: number;
  heightINCH?: number;
  weightLB?: number;
}

const tim: User = {
  username: '23',
  age: 23,
  heightCM: 173,
  weightKG: 74
}

type socialLinks = 'Instagram' | 'Facebook' | 'Pinterest';

let urlType: socialLinks;

urlType = 'Pinterest'
