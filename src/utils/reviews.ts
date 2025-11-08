import reviewsData from '../../data/reviews.json';

export interface Review {
  name: string;
  source: string;
  rating: number;
  text_en: string;
  text_es: string;
  date: string;
  link: string;
  clinic: string;
  avatar: string;
}

// Order of favorite reviews as specified
const favoriteOrder = [
  'Isabel',
  'Nuria Salido Iniesta',
  'Emma',
  'Teresa Vez luque',
  'Gerson Suaznabar',
  'Giuseppe Tinaglia',
  'customer',
  'J Ainsworth',
  'Santi Barreche Pelaez',
  'Laura Scott',
  'S F',
  'Zoe King',
];

export function getAllReviews(): Review[] {
  return reviewsData as Review[];
}

export function getOrderedReviews(): Review[] {
  const reviews = getAllReviews();
  const reviewMap = new Map(reviews.map(r => [r.name.toLowerCase(), r]));
  
  // Get favorite reviews in order
  const favoriteReviews: Review[] = [];
  favoriteOrder.forEach(name => {
    const review = reviewMap.get(name.toLowerCase());
    if (review) {
      favoriteReviews.push(review);
      reviewMap.delete(name.toLowerCase());
    }
  });
  
  // Add remaining reviews
  const remainingReviews = Array.from(reviewMap.values());
  
  return [...favoriteReviews, ...remainingReviews];
}

export function getPaginatedReviews(page: number = 1, perPage: number = 12): {
  reviews: Review[];
  totalPages: number;
  currentPage: number;
  total: number;
} {
  const allReviews = getOrderedReviews();
  const total = allReviews.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const reviews = allReviews.slice(start, end);
  
  return {
    reviews,
    totalPages,
    currentPage: page,
    total,
  };
}

export function getAvatarUrl(avatar: string): string {
  // If avatar is a URL, return it
  if (avatar.startsWith('http')) {
    return avatar;
  }
  
  // If avatar is initials and color (e.g., "EM, green"), generate a placeholder
  const parts = avatar.split(', ');
  if (parts.length === 2) {
    const [initials, color] = parts;
    return `https://ui-avatars.com/api/?name=${initials}&background=${getColorCode(color)}&color=fff&size=80&bold=true`;
  }
  
  return avatar;
}

function getColorCode(color: string): string {
  const colors: Record<string, string> = {
    green: '10b981',
    pink: 'ec4899',
    yellow: 'f59e0b',
    orange: 'f97316',
    blue: '3b82f6',
  };
  return colors[color] || '6b7280';
}

