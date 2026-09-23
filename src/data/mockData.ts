import { Game, Tournament, Deal, UserProfile } from '../types';

import heroBannerImg from '../assets/images/riftvault_hero_banner_1790167533348.jpg';
import silenthillImg from '../assets/images/silenthill_townfall_hero_1790186517667.jpg';
import alanwakeImg from '../assets/images/alan_wake_2_hero_1790186978730.jpg';
import fftacticsImg from '../assets/images/final_fantasy_tactics_hero_1790187902040.jpg';
import graveyardImg from '../assets/images/graveyard_keeper_2_hero_1790188187954.jpg';
import mobaImg from '../assets/images/moba_arena_champions_1790167548418.jpg';
import fpsImg from '../assets/images/tactical_fps_protocol_1790167560815.jpg';
import racingImg from '../assets/images/racing_velocity_rift_1790167574838.jpg';
import apexImg from '../assets/images/apex_scifi_action_1790167629796.jpg';
import rocketImg from '../assets/images/rocket_cyber_car_1790167641184.jpg';
import chronoImg from '../assets/images/chrono_tactics_art_1790167655479.jpg';
import shadowfallImg from '../assets/images/shadowfall_rpg_art_1790167668523.jpg';

export const INITIAL_USER: UserProfile = {
  name: 'Erik Padamans',
  tag: '#PRO994',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
  coinsBalance: 1250,
  level: 42,
  rankTitle: 'Diamond Elite',
  isPlusMember: true,
};

export const GAMES: Game[] = [
  {
    id: 'silent-hill-townfall',
    title: 'SILENT HILL',
    subtitle: 't o w n f a l l',
    version: 'V 1.4.153521',
    buildTag: 'Own CSF  2026',
    genre: 'RPG',
    platforms: ['PC', 'PlayStation 5'],
    price: 49.99,
    oldPrice: 59.99,
    discountPercentage: '17%',
    rating: 4.9,
    reviewCount: 41820,
    image: silenthillImg,
    fallbackGradient: 'from-zinc-950 via-slate-900 to-black',
    description: "Simon Ordell is called back to the island of St. Amelia to 'put things right', encountering a town lying quiet beneath a heavy fog, seemingly abandoned but not at rest. Venturing deeper, and driven to understand his connection to the place and its inhabitants, Simon begins to dis...",
    developer: 'No Code & Konami',
    publisher: 'Annapurna Interactive & Konami',
    releaseDate: '2026 Release',
    activePlayers: '14,350 Active',
    features: [
      'Atmospheric Psychological Horror & Analog Audio Puzzles',
      'Tactical Radio Resonance Scanner & CR-T Oscilloscope Tools',
      'Branching Narrative Investigations on the Isle of St. Amelia',
      'Ray-Traced Volumetric Fog & Unreal Engine 5 Spatial Acoustics'
    ],
    systemRequirements: {
      os: 'Windows 11 64-bit',
      processor: 'Intel Core i7-12700 / AMD Ryzen 7 7700X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3070 8GB / AMD Radeon RX 6800',
      storage: '60 GB available space NVMe SSD'
    },
    editions: [
      {
        name: 'Standard Edition',
        price: 49.99,
        perks: ['Full Game Key', 'St. Amelia Survivalist Radio Pack', 'Digital Soundtrack']
      },
      {
        name: 'Townfall Deluxe Edition',
        price: 69.99,
        perks: ['Full Game Key', '48hr Early Access', 'Analog Art Book', 'Simon Ordell Field Vest Skin', 'Original Score WAV']
      }
    ]
  },
  {
    id: 'final-fantasy-tactics',
    title: 'FINAL FANTASY TACTICS',
    subtitle: 'THE IVALICE CHRONICLES',
    version: 'B 24304444',
    buildTag: 'Own CSF 2025',
    genre: 'Strategy',
    platforms: ['PC'],
    price: 39.99,
    oldPrice: 49.99,
    discountPercentage: '20%',
    rating: 4.9,
    reviewCount: 38900,
    image: fftacticsImg,
    fallbackGradient: 'from-amber-950 via-stone-900 to-black',
    description: "Ivalice—a kingdom blessed by the light of the gods and ruled by the Two-headed Lion. A year after her defeat to Ordallia in the Fifty Years' War, the king succumbed to malady, leaving a mere boy of two to ascend the throne. Whoever was named regent would rule in truth, and thus e...",
    developer: 'Square Enix',
    publisher: 'Square Enix',
    releaseDate: '2025 Edition',
    activePlayers: '18,400 Active',
    features: [
      'Legendary Grid Tactical Role-Playing Battles in Ivalice',
      'Extensive Job Class Progression: Squire, Knight, Black Mage & Calculator',
      'Timeless Orchestral Score & Remastered High-Resolution Character Artwork',
      'Turn-Based Deep Strategy with Height Advantage & Zodiac Compatibility'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i5-6400 / AMD Ryzen 3 1200',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 960 / AMD Radeon RX 560',
      storage: '20 GB available space'
    },
    editions: [
      {
        name: 'Ivalice Edition',
        price: 39.99,
        perks: ['Base Game', 'Digital Soundtrack Sampler', 'Tactician Manual']
      },
      {
        name: 'Lion War Collector Bundle',
        price: 59.99,
        perks: ['Full Game Key', 'Complete Orchestral OST', 'Digital Artbook', 'Exclusive In-Game Job Skins']
      }
    ]
  },
  {
    id: 'graveyard-keeper-2',
    title: 'GRAVEYARD KEEPER 2',
    subtitle: 'r e s t o r e  t h e  t o w n',
    version: 'V 1.004.3',
    buildTag: 'Own CSF 2026',
    genre: 'RPG',
    platforms: ['PC', 'PlayStation 5', 'Nintendo Switch'],
    price: 24.99,
    oldPrice: 29.99,
    discountPercentage: '15%',
    rating: 4.9,
    reviewCount: 31200,
    image: graveyardImg,
    fallbackGradient: 'from-amber-950 via-slate-900 to-black',
    description: 'You are the Grand Inquisitor now! Restore the Town and lead your undead army into battle to save the realm from a zombie apocalypse. Welcome to Graveyard Keeper 2 - the sequel to the original, unhinged classic! Build and manage your own medieval graveyard. Harvest as much flora,...',
    developer: 'Lazy Bear Games',
    publisher: 'tinyBuild',
    releaseDate: '2026 Edition',
    activePlayers: '9,850 Active',
    features: [
      'Humorous Medieval Cemetery Management & Inquisitor Town Restoration',
      'Raise & Train Your Own Zombie Minion Workforces and Patrols',
      'Expanded Alchemy Labs, Anatomy Dissections & Dark Rituals',
      'New Town Economy, Trade Guilds & Witch Burning Festivals'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i5-6500 / AMD Ryzen 3 1300',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1050 / AMD Radeon RX 560',
      storage: '10 GB available space'
    },
    editions: [
      {
        name: 'Gravedigger Edition',
        price: 24.99,
        perks: ['Base Game', 'Undead Worker Skin Pack', 'Soundtrack']
      },
      {
        name: 'Grand Inquisitor Bundle',
        price: 39.99,
        perks: ['Full Game Key', 'Season Pass (3 DLCs)', 'Golden Shovel Weapon Skin', 'Digital Lore Book']
      }
    ]
  },
  {
    id: 'alan-wake-2',
    title: 'Alan Wake II',
    subtitle: 'd a r k  p l a c e',
    version: 'V 2.1.0',
    buildTag: 'PS5 & PC',
    genre: 'RPG',
    platforms: ['PC', 'PlayStation 5'],
    price: 49.99,
    oldPrice: 59.99,
    discountPercentage: '17%',
    rating: 4.9,
    reviewCount: 52100,
    image: alanwakeImg,
    fallbackGradient: 'from-amber-950 via-zinc-900 to-black',
    description: 'A string of ritualistic murders threatens Bright Falls. Saga Anderson arrives to investigate, while Alan Wake writes a dark story to shape reality.',
    developer: 'Remedy Entertainment',
    publisher: 'Epic Games Publishing',
    releaseDate: '2025 Edition',
    activePlayers: '11,200 Active',
    features: [
      'Dual-Protagonist Dual-Reality Narrative (Saga Anderson & Alan Wake)',
      'Northlight Engine Mind Place & Writer Room Mechanics',
      'Atmospheric Psychological Survival Horror in Bright Falls & The Dark Place',
      'Full Ray Tracing & DLSS 3.5 Path Tracing Graphics'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i5-7600K / AMD Ryzen 5 1600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600',
      storage: '90 GB SSD space'
    },
    editions: [
      {
        name: 'Standard Edition',
        price: 49.99,
        perks: ['Base Game', 'Ornate Revolver Skin', 'Survival Resources Pack']
      },
      {
        name: 'Deluxe Edition',
        price: 69.99,
        perks: ['Base Game', 'Expansion Pass (Night Springs & Lake House)', 'Nordic Shotgun Skin', 'Celebrity Suit']
      }
    ]
  },
  {
    id: 'fortnite-br',
    title: 'Fortnite Battle Royale',
    subtitle: 'c h a p t e r  6',
    version: 'V 32.10.89',
    buildTag: 'Verified  2026',
    genre: 'Battle Royale',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
    price: 29.99,
    oldPrice: 39.99,
    discountPercentage: '25%',
    rating: 4.8,
    reviewCount: 38240,
    image: heroBannerImg,
    fallbackGradient: 'from-purple-900 via-indigo-900 to-slate-900',
    description: 'Drop into the island, squad up, and battle for the win in dynamic zero-build or classic construction modes. Get the full season experience with exclusive battle pass skins, cosmetics, and bonus 2,500 V-Bucks.',
    developer: 'Epic Interactive',
    publisher: 'Epic Games',
    releaseDate: '2025 Edition',
    activePlayers: '3,200 Active',
    features: [
      'Zero-Build & High-Action Combat Modes',
      'Exclusive Neo-Chrono Operator Outfit & Pickaxe',
      '2,500 Instant Rift Currency & V-Bucks',
      'Full Cross-Play & Cross-Progression across PC and Consoles',
      'Dedicated Ranked Tournaments & Custom Matches'
    ],
    systemRequirements: {
      os: 'Windows 11 / 10 64-bit',
      processor: 'Intel Core i5-12400 / AMD Ryzen 5 5600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT',
      storage: '45 GB available space SSD'
    },
    editions: [
      {
        name: 'Standard Edition',
        price: 29.99,
        perks: ['Base Game Access', '1,000 V-Bucks', 'Starter Weapon Wrap']
      },
      {
        name: 'Champion Deluxe Bundle',
        price: 49.99,
        perks: ['Base Game', '3,500 V-Bucks', '2 Legendary Skins', 'Ranked Tourney Priority Entry', 'Season Pass']
      }
    ]
  },
  {
    id: 'league-of-legends',
    title: 'League of Legends: Rift Arena',
    genre: 'MOBA',
    platforms: ['PC'],
    price: 0,
    oldPrice: null,
    discountPercentage: 'FREE',
    rating: 4.6,
    reviewCount: 94100,
    image: mobaImg,
    fallbackGradient: 'from-blue-900 via-teal-950 to-slate-900',
    description: 'Master 160+ champions in the definitive 5v5 competitive multiplayer battle arena. Outplay your lane opponents, secure dragon and baron objectives, and shatter the enemy nexus.',
    developer: 'Riot Games',
    publisher: 'Riot Games',
    releaseDate: 'Seasonal Update 2026',
    activePlayers: '8,450 Active',
    features: [
      'Strategic 5v5 Summoner Rift Battles',
      'Free Starter Champion Bundle Unlocked',
      'Built-in Voice Chat & Tactical Ping Wheels',
      'Official NEOGAME Weekly Cash Cups & Tiered Ladders'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i3-4160 / AMD FX-4350',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 960 / AMD Radeon R9 280',
      storage: '25 GB available space'
    },
    editions: [
      {
        name: 'Free to Play',
        price: 0,
        perks: ['Full Game', 'Rotation Champions', 'Unranked & Ranked Queue']
      },
      {
        name: 'All-Star Champions Pack',
        price: 19.99,
        perks: ['Instant 30 Champion Unlock', '5 Epic Skins', '1,500 Riot Points', 'Tournament Pass']
      }
    ]
  },
  {
    id: 'valorant-protocol',
    title: 'Valorant Protocol',
    genre: 'FPS',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
    price: 19.99,
    oldPrice: 24.99,
    discountPercentage: '20%',
    rating: 4.7,
    reviewCount: 42100,
    image: fpsImg,
    fallbackGradient: 'from-rose-950 via-purple-950 to-slate-900',
    description: 'Precision gunplay meets tactical agent abilities in this high-stakes 5v5 character-based tactical shooter. Every round is a chance to execute clutches, defend spikes, and climb Radiant ranks.',
    developer: 'Riot Interactive',
    publisher: 'Riot Games',
    releaseDate: 'Episode 9 Global',
    activePlayers: '5,120 Active',
    features: [
      'Crisp 128-tick Server Netcode & Vanguard Defense',
      '19 Unique Tacticians, Duelists, Initiators & Sentinels',
      'Includes Protocol Skin Collection & 1,800 VP',
      'High-Stakes Premier Division Weekly Tournaments'
    ],
    systemRequirements: {
      os: 'Windows 11 64-bit with TPM 2.0',
      processor: 'Intel Core i5-9400F / AMD Ryzen 5 2600X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1660 / AMD Radeon RX 580',
      storage: '35 GB SSD'
    },
    editions: [
      {
        name: 'Tactical Standard Edition',
        price: 19.99,
        perks: ['Base Game', 'Protocol Vandal Skin', '1,200 Valorant Points']
      },
      {
        name: 'Elite Operative Arsenal',
        price: 39.99,
        perks: ['Complete Protocol Weapon Skin Set', 'Operator Melee Knife', '3,000 VP', 'Agent Pass']
      }
    ]
  },
  {
    id: 'apex-legion',
    title: 'Apex Legion',
    genre: 'Battle Royale',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
    price: 14.99,
    oldPrice: 29.99,
    discountPercentage: '50%',
    rating: 4.5,
    reviewCount: 29800,
    image: apexImg,
    fallbackGradient: 'from-amber-950 via-slate-900 to-black',
    description: 'Conquer with character in Apex Legion, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier.',
    developer: 'Respawn Entertainment',
    publisher: 'Electronic Arts',
    releaseDate: 'Breakthrough Edition',
    activePlayers: '4,100 Active',
    features: [
      'High-velocity 3-player Squad Dynamics',
      'Unique Traversal: Grapples, Jump Pads & Portals',
      'Includes 1,000 Apex Coins & 2 Rare Character Packs',
      'Global Cross-Play Arena Battles'
    ],
    systemRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-3570K / AMD FX-6300',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GeForce GTX 970 / AMD Radeon R9 290',
      storage: '75 GB SSD'
    },
    editions: [
      {
        name: 'Champion Edition',
        price: 14.99,
        perks: ['Instant 9 Legend Unlocks', '3 Exclusive Legendary Character Skins', '1,000 Apex Coins']
      },
      {
        name: 'Ultimate Frontier Bundle',
        price: 29.99,
        perks: ['All Legends Unlocked', '2 Heirloom Shard Crates', 'Battle Pass Tier Boost']
      }
    ]
  },
  {
    id: 'rocket-league-turbo',
    title: 'Rocket League Turbo',
    genre: 'Sports',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
    price: 9.99,
    oldPrice: 19.99,
    discountPercentage: '50%',
    rating: 4.4,
    reviewCount: 22400,
    image: rocketImg,
    fallbackGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    description: 'Soccer meets driving in an award-winning, physics-based multiplayer game! Hit the pitch for a fully-featured offline season mode, multiple game types, and casual and competitive online matches.',
    developer: 'Psyonix LLC',
    publisher: 'Psyonix',
    releaseDate: 'Season 18 Turbo',
    activePlayers: '2,900 Active',
    features: [
      'High-flying Aerial Acrobatics & Supersonic Goals',
      'Rocket Pass Premium with 70+ Tiers of Rewards',
      'Cross-Platform Competitive Ranked Play',
      'Automated In-Game Tournaments 6 Times a Day'
    ],
    systemRequirements: {
      os: 'Windows 10 64-bit',
      processor: '2.5 GHz Quad core',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 470',
      storage: '20 GB space'
    },
    editions: [
      {
        name: 'Turbo Starter Pass',
        price: 9.99,
        perks: ['500 Credits', 'Fennec Body & Decal', 'Cristiano Wheels']
      },
      {
        name: 'Supersonic Deluxe',
        price: 19.99,
        perks: ['Season Rocket Pass', 'Titanium White Goal Explosion', '1,500 Credits']
      }
    ]
  },
  {
    id: 'chrono-strike',
    title: 'Chrono Strike Tactics',
    genre: 'Strategy',
    platforms: ['PC'],
    price: 34.99,
    oldPrice: null,
    discountPercentage: null,
    rating: 4.9,
    reviewCount: 15300,
    image: chronoImg,
    fallbackGradient: 'from-emerald-950 via-cyan-950 to-slate-950',
    description: 'Lead an elite squad of cybernetic chronomancers in grid-based tactical combat where you can rewind turns, manipulate time streams, and coordinate devastating synchronized assaults.',
    developer: 'Aetherion Interactive',
    publisher: 'Rift Games Studio',
    releaseDate: 'March 2026',
    activePlayers: '1,780 Active',
    features: [
      'Groundbreaking 4D Temporal Timeline Mechanics',
      'Custom Unit Modding & Deep Skill Trees',
      'Simultaneous Turn Asynchronous Esports Mode',
      'Engaging 40-hour Narrative Single Player Campaign'
    ],
    systemRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i7-8700 / AMD Ryzen 7 2700',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700',
      storage: '30 GB SSD'
    },
    editions: [
      {
        name: 'Tactician Edition',
        price: 34.99,
        perks: ['Full Game', 'Digital Artbook', 'Original Soundtrack']
      },
      {
        name: 'Chronomancer Master Pack',
        price: 49.99,
        perks: ['Digital Deluxe Content', '3 Future DLC Expansions', 'Exclusive Unit Skins']
      }
    ]
  },
  {
    id: 'velocity-rift',
    title: 'Velocity Rift Racing',
    genre: 'Racing',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
    price: 24.99,
    oldPrice: 34.99,
    discountPercentage: '30%',
    rating: 4.3,
    reviewCount: 11900,
    image: racingImg,
    fallbackGradient: 'from-cyan-950 via-blue-950 to-slate-950',
    description: 'Blaze through gravity-defying neon magnetic tracks at speeds exceeding 900 km/h. Weaponize hyper-boost shields and navigate split-second rift portals in pulse-pounding 16-racer online grids.',
    developer: 'Apex Horizon Studios',
    publisher: 'Rift Dynamics',
    releaseDate: 'Next-Gen Recharged',
    activePlayers: '1,450 Active',
    features: [
      'Full 120 FPS High-Refresh Competitive Anti-Grav Racing',
      'Custom Vehicle Tuning & Aerodynamic Hull Customizer',
      'Online Grand Prix Leagues with Real Cash Prize Pools',
      'Stunning Dynamic Track Weather & Laser Illumination'
    ],
    systemRequirements: {
      os: 'Windows 11 64-bit',
      processor: 'Intel Core i5-11400 / AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT',
      storage: '40 GB SSD'
    },
    editions: [
      {
        name: 'Grid Standard',
        price: 24.99,
        perks: ['Base Game', '3 Starter Anti-Grav Craft', 'Track Pass Vol 1']
      },
      {
        name: 'Neon Velocity Deluxe',
        price: 39.99,
        perks: ['Full Season Pass', 'Cyber Sound Pack', '5 Exotic Speeders']
      }
    ]
  },
  {
    id: 'shadowfall-odyssey',
    title: 'Shadowfall Odyssey',
    genre: 'RPG',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X'],
    price: 44.99,
    oldPrice: null,
    discountPercentage: null,
    rating: 4.9,
    reviewCount: 31200,
    image: shadowfallImg,
    fallbackGradient: 'from-purple-950 via-slate-950 to-black',
    description: 'Venture into a crumbling gothic empire consumed by the Eclipse. Master responsive soulslike parry systems, discover forgotten sorceries, and forge your legacy across an expansive interconnected dark fantasy world.',
    developer: 'Grimspire Studios',
    publisher: 'Deep Silver & NEOGAME',
    releaseDate: 'Definitive Edition',
    activePlayers: '3,890 Active',
    features: [
      'Breathtaking Dark Gothic Open World with No Load Screens',
      'Fluid Weapon Stance Combos & Dynamic Dodge Windows',
      'Cooperative Summoning & PvP Invader Duels',
      'Over 200 Unique Weapons, Spells, and Armor Sets'
    ],
    systemRequirements: {
      os: 'Windows 11 / 10 64-bit',
      processor: 'Intel Core i7-10700K / AMD Ryzen 7 3800X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3080 / AMD Radeon RX 6800 XT',
      storage: '65 GB NVMe SSD'
    },
    editions: [
      {
        name: 'Eclipse Standard',
        price: 44.99,
        perks: ['Base Game', 'Knight of the Eclipse Armor Set', 'Digital Manual']
      },
      {
        name: 'Lord of Shadows Collector',
        price: 64.99,
        perks: ['Full Game', 'Expansion Pass 1 & 2', 'Artbook & Flac Soundtrack']
      }
    ]
  }
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: 'tourney-winter-2026',
    title: 'Winter 2026 Championship',
    game: 'Fortnite Battle Royale',
    gameIcon: '🏆',
    dateStr: 'Sat, 18 Jan 15:00',
    countdownSeconds: 27924, // ~07:45:24
    description: 'Compete with your teammates in this winter season themed championship for glory and points.',
    prizePool: '$50,000 Cash + 10,000 pts',
    prizeCoins: 10000,
    slotsCurrent: 19,
    slotsMax: 24,
    format: 'Squad 4v4',
    region: 'Europe',
    entryFee: 'Free for NEOGAME Plus',
    participantAvatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'tourney-apex-breakthrough',
    title: 'Breakthrough Arena Cup',
    game: 'Apex Legion',
    gameIcon: '⚡',
    dateStr: 'Sun, 19 Jan 17:30',
    countdownSeconds: 44810, // ~12:26:50
    description: 'One more contest is coming upon us. Lock in your composition and execute decisive squad breaches.',
    prizePool: '$25,000 Cash + 10,000 pts',
    prizeCoins: 10000,
    slotsCurrent: 16,
    slotsMax: 20,
    format: 'Duo',
    region: 'North America',
    entryFee: '200 Rift Coins',
    participantAvatars: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=60&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'tourney-fortnite-challenge',
    title: 'Fortnite Epic Challenge',
    game: 'Fortnite Battle Royale',
    gameIcon: '🎯',
    dateStr: 'Mon, 20 Jan 18:00',
    countdownSeconds: 127205, // ~35:20:05
    description: 'The incredible zero-build showdown awaits you in this high-intensity single-elimination bracket.',
    prizePool: '25,000 pts + Exclusive Skin',
    prizeCoins: 25000,
    slotsCurrent: 28,
    slotsMax: 32,
    format: 'Solo',
    region: 'Global',
    entryFee: 'Free',
    participantAvatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'tourney-guns-glory',
    title: 'Guns & Glory Protocol Series',
    game: 'Valorant Protocol',
    gameIcon: '🔥',
    dateStr: 'Tue, 21 Jan 19:00',
    countdownSeconds: 16425, // ~04:33:45
    description: 'Clutch or fall. Headshots only or die trying in this premier 5v5 spike plant tournament.',
    prizePool: '$15,000 Cash + 10,000 pts',
    prizeCoins: 10000,
    slotsCurrent: 18,
    slotsMax: 24,
    format: '5v5 Rift',
    region: 'Europe',
    entryFee: '150 Rift Coins',
    participantAvatars: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80'
    ]
  }
];

export const DEALS: Deal[] = [
  {
    id: 'deal-apex-bundle',
    title: 'Apex Legion',
    genre: 'Battle Royale · Legend Squad Bundle',
    price: 14.99,
    oldPrice: 29.99,
    discountPercentage: '-50%',
    image: apexImg,
    fallbackGradient: 'from-amber-900 to-black',
    badge: 'HOT DEAL',
    description: 'Includes 9 legends, 3 legendary skins, and 1,000 Apex coins.'
  },
  {
    id: 'deal-rocket-pass',
    title: 'Rocket League Turbo',
    genre: 'Sports · Season 18 Pass',
    price: 9.99,
    oldPrice: 19.99,
    discountPercentage: '-50%',
    image: rocketImg,
    fallbackGradient: 'from-blue-900 to-black',
    badge: 'FLASH SALE',
    description: '70+ tiers of rewards, titanium white goal explosion, and 500 bonus credits.'
  },
  {
    id: 'deal-velocity-deluxe',
    title: 'Velocity Rift Racing',
    genre: 'Racing · Deluxe Edition',
    price: 24.99,
    oldPrice: 34.99,
    discountPercentage: '-30%',
    image: racingImg,
    fallbackGradient: 'from-cyan-900 to-black',
    badge: 'BESTSELLER',
    description: 'Includes 5 hyper-speed exotic vehicles and the complete season 1 neon track expansion.'
  },
  {
    id: 'deal-valorant-bundle',
    title: 'Valorant Protocol',
    genre: 'FPS · Champion Arsenal Bundle',
    price: 19.99,
    oldPrice: 24.99,
    discountPercentage: '-20%',
    image: fpsImg,
    fallbackGradient: 'from-rose-900 to-black',
    badge: 'LIMITED TIME',
    description: 'Includes Protocol Vandal, Operator melee knife, and 1,200 VP.'
  }
];
