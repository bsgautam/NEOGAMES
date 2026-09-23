import React, { useState } from 'react';
import { Game, Tournament, Deal, CartItem, LibraryItem, UserProfile, GameGenre, GamePlatform } from './types';
import { GAMES, TOURNAMENTS, DEALS, INITIAL_USER } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CategoryFilters } from './components/CategoryFilters';
import { GameCard } from './components/GameCard';
import { FeaturedTournaments } from './components/FeaturedTournaments';
import { PromoBanners } from './components/PromoBanners';
import { DealsSection } from './components/DealsSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { GameDetailModal } from './components/GameDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutSuccessModal } from './components/CheckoutSuccessModal';
import { LibraryModal } from './components/LibraryModal';
import { TournamentJoinModal } from './components/TournamentJoinModal';
import { TrailerModal } from './components/TrailerModal';
import { AuthModal } from './components/AuthModal';
import { SearchModal } from './components/SearchModal';
import { WishlistModal } from './components/WishlistModal';
import { ContactModal } from './components/ContactModal';
import { ToastNotification, ToastMessage } from './components/ToastNotification';

export default function App() {
  // Primary datasets
  const [games] = useState<Game[]>(GAMES);
  const [tournaments] = useState<Tournament[]>(TOURNAMENTS);
  const [deals] = useState<Deal[]>(DEALS);

  // User state
  const [user, setUser] = useState<UserProfile | null>(INITIAL_USER);

  // Cart & Wishlist state
  const [cart, setCart] = useState<CartItem[]>([
    {
      game: GAMES[0], // Fortnite Battle Royale
      editionName: 'Standard Edition',
      quantity: 1,
      platform: 'PC',
    },
    {
      game: GAMES[2], // Valorant Protocol
      editionName: 'Tactical Standard Edition',
      quantity: 1,
      platform: 'PC',
    },
    {
      game: GAMES[4], // Rocket League Turbo
      editionName: 'Turbo Starter Pass',
      quantity: 1,
      platform: 'PlayStation 5',
    }
  ]);
  const [wishlist, setWishlist] = useState<Game[]>([GAMES[5], GAMES[7]]); // Chrono Strike & Shadowfall

  // Library state (initial games in user's library)
  const [library, setLibrary] = useState<LibraryItem[]>([
    {
      id: 'lib-1',
      game: GAMES[1], // League of Legends
      edition: 'All-Star Champions Pack',
      platform: 'PC',
      purchaseDate: 'Jan 10, 2026',
      activationKey: 'RIOT-9482-RVLT-1029',
      playtimeHours: 142.5,
      lastPlayed: 'Yesterday',
    }
  ]);

  // Joined Tournaments
  const [joinedTournamentIds, setJoinedTournamentIds] = useState<string[]>([]);

  // Navigation tab
  const [activeTab, setActiveTab] = useState<'store' | 'tournaments' | 'deals' | 'library'>('store');

  // Filter & Sort State
  const [selectedGenre, setSelectedGenre] = useState<GameGenre>('All Games');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Modal dialog states
  const [selectedGameForDetail, setSelectedGameForDetail] = useState<Game | null>(null);
  const [trailerGame, setTrailerGame] = useState<Game | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [tournamentJoinTarget, setTournamentJoinTarget] = useState<Tournament | null>(null);

  // Checkout modal
  const [checkoutSuccessData, setCheckoutSuccessData] = useState<{
    orderId: string;
    items: CartItem[];
    totalPaid: number;
    keys: { [gameId: string]: string };
  } | null>(null);

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const handleAddToCart = (game: Game, editionName?: string, platform?: GamePlatform) => {
    const selectedEdition = editionName || game.editions[0].name;
    const selectedPlat = platform || game.platforms[0];

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.game.id === game.id && item.editionName === selectedEdition && item.platform === selectedPlat
      );
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [...prev, { game, editionName: selectedEdition, platform: selectedPlat, quantity: 1 }];
    });

    addToast(`Added ${game.title} to Cart`, `${selectedEdition} · ${selectedPlat}`);
  };

  const handleAddDealToCart = (deal: Deal) => {
    const matchedGame = games.find((g) => g.title.toLowerCase().includes(deal.title.toLowerCase())) || games[0];
    handleAddToCart(matchedGame);
  };

  const handleUpdateCartQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    addToast('Item removed from cart');
  };

  const handleBuyNow = (game: Game, editionName: string, platform: GamePlatform) => {
    handleAddToCart(game, editionName, platform);
    setSelectedGameForDetail(null);
    setCartOpen(true);
  };

  // Wishlist toggle
  const handleToggleWishlist = (game: Game) => {
    const exists = wishlist.some((g) => g.id === game.id);
    if (exists) {
      setWishlist((prev) => prev.filter((g) => g.id !== game.id));
      addToast(`Removed ${game.title} from Wishlist`);
    } else {
      setWishlist((prev) => [...prev, game]);
      addToast(`Saved ${game.title} to Wishlist`, 'We will notify you on price drops!');
    }
  };

  // Checkout submission
  const handleCheckout = (totalDiscount: number, coinsUsed: number) => {
    if (cart.length === 0) return;

    const orderId = `NEO-${Math.floor(10000 + Math.random() * 90000)}`;
    const keys: { [gameId: string]: string } = {};

    const subtotal = cart.reduce((acc, item) => {
      const edition = item.game.editions.find((e) => e.name === item.editionName);
      const price = edition ? edition.price : item.game.price;
      return acc + price * item.quantity;
    }, 0);

    const totalPaid = Math.max(0, subtotal - totalDiscount);

    // Generate keys and add to library
    const newLibraryItems: LibraryItem[] = [];

    cart.forEach((item) => {
      const keyStr = `${item.platform === 'PC' ? 'STEAM' : 'NEOG'}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
      keys[item.game.id] = keyStr;

      newLibraryItems.push({
        id: `lib-${Date.now()}-${item.game.id}`,
        game: item.game,
        edition: item.editionName,
        platform: item.platform,
        purchaseDate: 'Today',
        activationKey: keyStr,
        playtimeHours: 0,
        lastPlayed: 'Not yet launched',
      });
    });

    setLibrary((prev) => [...prev, ...newLibraryItems]);

    // Update user balance (+150 coins reward, subtract coins used)
    if (user) {
      setUser((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          coinsBalance: Math.max(0, prev.coinsBalance - coinsUsed + 150),
        };
      });
    }

    setCheckoutSuccessData({
      orderId,
      items: [...cart],
      totalPaid,
      keys,
    });

    // Clear cart and close drawer
    setCart([]);
    setCartOpen(false);
    addToast(`Order ${orderId} Confirmed!`, 'Activation keys added to your library.');
  };

  // Tournament join confirmation
  const handleConfirmJoinTournament = (tournament: Tournament, squadName: string) => {
    setJoinedTournamentIds((prev) => [...prev, tournament.id]);
    setTournamentJoinTarget(null);
    addToast(
      `Squad "${squadName}" Registered!`,
      `Locked into ${tournament.title}. Check-in opens 30m prior to start.`
    );
  };

  // Filtering games
  const filteredGames = games.filter((game) => {
    if (selectedGenre !== 'All Games' && game.genre !== selectedGenre) {
      return false;
    }
    if (selectedPlatform !== 'all' && !game.platforms.includes(selectedPlatform as GamePlatform)) {
      return false;
    }
    return true;
  });

  // Sorting games
  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'discount') {
      const discA = a.discountPercentage ? parseInt(a.discountPercentage) || 99 : 0;
      const discB = b.discountPercentage ? parseInt(b.discountPercentage) || 99 : 0;
      return discB - discA;
    }
    return 0; // default featured
  });

  // Check if game is in library
  const isGameOwned = (gameId: string) => {
    return library.some((item) => item.game.id === gameId);
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] text-[#f2f1f7] flex flex-col font-sans selection:bg-[#7b3ff2] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        wishlistCount={wishlist.length}
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'library') {
            setLibraryOpen(true);
          }
        }}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        user={user}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Spotlight (Visible on Store & Featured) */}
        {activeTab === 'store' && (
          <HeroBanner
            games={games}
            onSelectGame={(g) => setSelectedGameForDetail(g)}
            onAddToCart={(g) => handleAddToCart(g)}
            onWatchTrailer={(g) => setTrailerGame(g)}
          />
        )}

        {/* Catalog Section */}
        {(activeTab === 'store' || activeTab === 'deals') && (
          <section className="max-w-[1320px] mx-auto mt-12 px-6">
            {/* Category Filters */}
            <CategoryFilters
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
              selectedPlatform={selectedPlatform}
              onSelectPlatform={setSelectedPlatform}
              sortBy={sortBy}
              onSelectSort={setSortBy}
              totalGames={sortedGames.length}
            />

            {/* Section Head */}
            <div className="flex items-end justify-between mt-8 mb-6">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#f2f1f7]">
                  {selectedGenre === 'All Games' ? 'Featured Titles' : `${selectedGenre} Titles`}
                </h2>
                <p className="text-sm text-[#8b8a9c] mt-1">
                  Top-ranked titles with live competitive play and verified activation keys
                </p>
              </div>

              <div className="text-xs text-[#9d6bff] font-semibold flex items-center gap-1">
                Showing {sortedGames.length} of {games.length}
              </div>
            </div>

            {/* Game Grid (4 columns desktop) */}
            {sortedGames.length === 0 ? (
              <div className="py-16 text-center text-xs text-[#8b8a9c] bg-[#14141f] rounded-2xl border border-[#232333]">
                No games match the selected platform and genre filters. Try selecting &quot;All Games&quot; or &quot;All Platforms&quot;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {sortedGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    isWishlisted={wishlist.some((g) => g.id === game.id)}
                    isOwned={isGameOwned(game.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onSelectGame={(g) => setSelectedGameForDetail(g)}
                    onAddToCart={(g) => handleAddToCart(g)}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Featured Tournaments Section */}
        {(activeTab === 'store' || activeTab === 'tournaments') && (
          <FeaturedTournaments
            tournaments={tournaments}
            onJoinTournament={(t) => setTournamentJoinTarget(t)}
            joinedTournamentIds={joinedTournamentIds}
          />
        )}

        {/* Promotional Banners */}
        {activeTab === 'store' && (
          <PromoBanners
            onJoinChampionship={() => setTournamentJoinTarget(tournaments[0])}
            onExplorePlus={() => {
              addToast('NEOGAMES Plus', 'Monthly 1,000 coin stipend & zero fee tournament entry is active.');
            }}
          />
        )}

        {/* Today's Deals Section */}
        {(activeTab === 'store' || activeTab === 'deals') && (
          <DealsSection
            deals={deals}
            onAddDealToCart={handleAddDealToCart}
          />
        )}

        {/* Newsletter Subscription Drop */}
        <Newsletter
          onSubscribe={(email) => {
            if (user) {
              setUser({ ...user, coinsBalance: user.coinsBalance + 50 });
            }
            addToast('Welcome to NEOGAMES Drops!', '+50 Loyalty Coins credited to your account.');
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'library') setLibraryOpen(true);
        }}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Modals & Slide-over Drawers */}
      {selectedGameForDetail && (
        <GameDetailModal
          game={selectedGameForDetail}
          onClose={() => setSelectedGameForDetail(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isWishlisted={wishlist.some((g) => g.id === selectedGameForDetail.id)}
          onToggleWishlist={handleToggleWishlist}
          onWatchTrailer={(g) => setTrailerGame(g)}
        />
      )}

      {cartOpen && (
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cart}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveCartItem}
          onCheckout={handleCheckout}
          user={user}
        />
      )}

      {checkoutSuccessData && (
        <CheckoutSuccessModal
          orderId={checkoutSuccessData.orderId}
          items={checkoutSuccessData.items}
          totalPaid={checkoutSuccessData.totalPaid}
          keysGenerated={checkoutSuccessData.keys}
          onClose={() => setCheckoutSuccessData(null)}
          onGoToLibrary={() => {
            setCheckoutSuccessData(null);
            setLibraryOpen(true);
          }}
        />
      )}

      {libraryOpen && (
        <LibraryModal
          library={library}
          isOpen={libraryOpen}
          onClose={() => setLibraryOpen(false)}
          onBrowseStore={() => {
            setLibraryOpen(false);
            setActiveTab('store');
          }}
        />
      )}

      {tournamentJoinTarget && (
        <TournamentJoinModal
          tournament={tournamentJoinTarget}
          user={user}
          onClose={() => setTournamentJoinTarget(null)}
          onConfirmJoin={handleConfirmJoinTournament}
        />
      )}

      {trailerGame && (
        <TrailerModal
          game={trailerGame}
          onClose={() => setTrailerGame(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {authOpen && (
        <AuthModal
          isOpen={authOpen}
          onClose={() => setAuthOpen(false)}
          onLoginSuccess={(u) => {
            setUser(u);
            addToast(`Logged in as ${u.name}`, 'Diamond Elite status verified.');
          }}
          currentUser={user}
          onLogout={() => {
            setUser(null);
            addToast('Signed out successfully');
          }}
        />
      )}

      {searchOpen && (
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          games={games}
          onSelectGame={(g) => setSelectedGameForDetail(g)}
        />
      )}

      {wishlistOpen && (
        <WishlistModal
          isOpen={wishlistOpen}
          onClose={() => setWishlistOpen(false)}
          wishlist={wishlist}
          onRemoveFromWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onSelectGame={(g) => setSelectedGameForDetail(g)}
        />
      )}

      {contactOpen && (
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          onSubmit={(sub) => {
            addToast('Inquiry Submitted', 'Our esports support staff will follow up shortly.');
          }}
        />
      )}

      {/* Floating Toast Notification Stack */}
      <ToastNotification toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
