export type GameGenre = 
  | 'All Games'
  | 'Battle Royale'
  | 'MOBA'
  | 'FPS'
  | 'RPG'
  | 'Racing'
  | 'Strategy'
  | 'Sports';

export type GamePlatform = 'PC' | 'PlayStation 5' | 'Xbox Series X' | 'Nintendo Switch';

export interface Game {
  id: string;
  title: string;
  genre: GameGenre;
  platforms: GamePlatform[];
  price: number;
  oldPrice?: number | null;
  discountPercentage?: string | null;
  rating: number;
  reviewCount: number;
  image: string;
  fallbackGradient: string;
  description: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  activePlayers: string;
  version?: string;
  subtitle?: string;
  buildTag?: string;
  trailerUrl?: string;
  features: string[];
  systemRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  editions: {
    name: string;
    price: number;
    perks: string[];
  }[];
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  gameIcon: string;
  dateStr: string;
  countdownSeconds: number; // For active countdown timer
  description: string;
  prizePool: string;
  prizeCoins: number;
  slotsCurrent: number;
  slotsMax: number;
  participantAvatars: string[];
  entryFee: string;
  format: 'Solo' | 'Duo' | 'Squad 4v4' | '5v5 Rift';
  region: 'Global' | 'North America' | 'Europe' | 'Asia Pacific';
}

export interface Deal {
  id: string;
  title: string;
  genre: string;
  price: number;
  oldPrice: number;
  discountPercentage: string;
  image: string;
  fallbackGradient: string;
  badge: string;
  description: string;
}

export interface CartItem {
  game: Game;
  editionName: string;
  quantity: number;
  platform: GamePlatform;
}

export interface LibraryItem {
  id: string;
  game: Game;
  edition: string;
  platform: GamePlatform;
  purchaseDate: string;
  activationKey: string;
  playtimeHours: number;
  lastPlayed: string;
}

export interface UserProfile {
  name: string;
  tag: string;
  avatar: string;
  coinsBalance: number;
  level: number;
  rankTitle: string;
  isPlusMember: boolean;
}
