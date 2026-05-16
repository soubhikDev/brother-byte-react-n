import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './StationMenu.css';
import MenuHead from '../../Components/MenuHead/MenuHead';
import MenuCard from '../../Components/MenuCard/MenuCard';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Discount from '../../Components/Discount/Discount';
import CartModal from '../../Components/CartModal/CartModal';
import AddToCartBar from '../../Components/AddToCartBar/AddToCartBar';

const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const IconFilter = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const menuItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    name: "Chole Bhature",
    price: 149,
    rating: 4.3,
    ratingCount: 200,
    description: "Fluffy deep-fried bhature served with spiced chickpea curry, pickled onions & a wedge of lime.",
    isVeg: true,
    badge: "Bestseller",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    name: "Chicken Biryani",
    price: 220,
    rating: 4.5,
    ratingCount: 350,
    description: "Aromatic basmati rice layered with tender chicken, saffron & caramelised onions.",
    isVeg: false,
    badge: "Chef's Pick",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
    name: "Dal Makhani",
    price: 129,
    rating: 4.1,
    ratingCount: 120,
    description: "Slow-cooked black lentils in a rich tomato-butter gravy, served with butter naan.",
    isVeg: true,
    badge: "",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    name: "Paneer Tikka",
    price: 179,
    rating: 4.4,
    ratingCount: 180,
    description: "Tandoor-grilled cottage cheese marinated in spiced yogurt, served with mint chutney.",
    isVeg: true,
    badge: "New",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    name: "Mutton Rogan Josh",
    price: 280,
    rating: 4.6,
    ratingCount: 95,
    description: "Kashmiri style mutton curry with aromatic spices and yogurt.",
    isVeg: false,
    badge: "Spicy",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
    name: "Veg Thali",
    price: 150,
    rating: 4.2,
    ratingCount: 140,
    description: "Complete vegetarian meal with dal, vegetables, rice, and roti.",
    isVeg: true,
    badge: "",
  }
];

export default function StationMenu() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    vegOnly: false,
    priceRange: 'all',
    ratingMin: 0,
    sortBy: 'name'
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (filters.vegOnly && !item.isVeg) return false;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (item.price < min || (max && item.price > max)) return false;
      }
      if (item.rating < filters.ratingMin) return false;
      return true;
    });

    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <>
      <div className="StationMenu_wrpr">
        <MenuHead />
        <Discount />
        <div className="StationMenu_card">
          <div className="StationMenu_header">
            <div className="StationMenu_header-title">
              <h1>Station Menu</h1>
              <div className="menu-controls">
                <div className="search-section">
                  <div className="search-input-wrapper">
                    <IconSearch />
                    <input
                      type="text"
                      placeholder="Search menu items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>
                </div>
                <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                  <IconFilter />
                </button>
              </div>
            </div>

            <div className="menu-meta">
              <span>{filteredAndSortedItems.length} items available</span>
              {filters.vegOnly && <span className="meta-pill">Veg Only</span>}
            </div>

            {showFilters && (
              <div className="filter-section">
                <div className="filter-row">
                  <label className="filter-label checkbox-label">
                    <input type="checkbox" checked={filters.vegOnly} onChange={(e) => handleFilterChange('vegOnly', e.target.checked)} />
                    Veg Only
                  </label>
                  <div className="filter-group">
                    <FormControl fullWidth>
                      <InputLabel id="price-range-label">Price Range</InputLabel>
                      <Select size="small" labelId="price-range-label" value={filters.priceRange} label="Price Range" onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
                        <MenuItem value="all">All Prices</MenuItem>
                        <MenuItem value="0-150">Under ₹150</MenuItem>
                        <MenuItem value="150-250">₹150 - ₹250</MenuItem>
                        <MenuItem value="250-500">Above ₹250</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="filter-group">
                    <FormControl fullWidth>
                      <InputLabel id="rating-min-label">Min Rating</InputLabel>
                      <Select size="small" labelId="rating-min-label" value={filters.ratingMin} label="Min Rating" onChange={(e) => handleFilterChange('ratingMin', Number(e.target.value))}>
                        <MenuItem value={0}>Any Rating</MenuItem>
                        <MenuItem value={4}>4+ Stars</MenuItem>
                        <MenuItem value={4.5}>4.5+ Stars</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="filter-group">
                    <FormControl fullWidth>
                      <InputLabel id="sort-by-label">Sort By</InputLabel>
                      <Select size="small" labelId="sort-by-label" value={filters.sortBy} label="Sort By" onChange={(e) => handleFilterChange('sortBy', e.target.value)}>
                        <MenuItem value="name">Name (A-Z)</MenuItem>
                        <MenuItem value="price-low">Price (Low to High)</MenuItem>
                        <MenuItem value="price-high">Price (High to Low)</MenuItem>
                        <MenuItem value="rating">Rating (High to Low)</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="station_main_wrpr">
            {filteredAndSortedItems.length > 0 ? (
              filteredAndSortedItems.map((item) => (
                <MenuCard key={item.id} {...item} />
              ))
            ) : (
              <div className="no-results">
                <p>No menu items match your filters.</p>
                <button
                  onClick={() => { setSearchTerm(''); setFilters({ vegOnly: false, priceRange: 'all', ratingMin: 0, sortBy: 'name' }); }}
                  className="clear-filters-btn"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          <button className="StationMenu_back" onClick={() => navigate(-1)}>
            <IconArrowLeft />
            Back to results
          </button>
        </div>
      </div>

      {/* Cart Components — render outside the main wrapper */}
      <AddToCartBar />
      <CartModal />
    </>
  );
}