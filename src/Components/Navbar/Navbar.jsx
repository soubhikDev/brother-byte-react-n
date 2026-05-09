import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from '../../assets/BrotherByteLOGO.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Offer", href: "/offer" },
    { label: "Group Order", href: "/group-order" },
    { label: "Contact Us", href: "/contact" },
    { label: "Order History", href: "/about" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            // Navbar background toggle
            setScrolled(scrollY > 40);

            // Scroll progress bar
            const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
            setProgress(pct);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
        // customer info =====================>
    useEffect(() => {
        const fatchLocalStoreData = async () => {
            const data = await localStorage.getItem("customer_details");
            setCustomerInfo(JSON.parse(data));
        };
        fatchLocalStoreData();
    }, []);


    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

    const navigate = useNavigate();

    const obj = JSON.parse(localStorage.getItem("customer_details"));

    const firstName = obj?.name?.trim().split(/\s+/)[0];

     const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.clear();
            navigate("/sign-in");
        }
    };

    return (
        <>
            {/* ===== NAVBAR ===== */}
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                {/* Scroll Progress Bar */}
                <div
                    className="nav-progress"
                    style={{ width: `${progress}%` }}
                />

                <div className="nav-inner">
                    {/* Logo */}
                    <NavLink to="/" className="nav-logo" aria-label="Go to home">
                        <img src={Logo} alt="" />
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <div className="nav-links">
                        {NAV_LINKS.map(({ label, href }) => (
                            <NavLink key={label} to={href}>
                                {/* <span className="link-dot" /> */}
                                    {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="nav-right">
                        {/* Search Icon */}
                        <button className="nav-search" aria-label="Search">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* CTA Button */}
                        {customerInfo ? 
                        <>
                            {/* <Avatar alt={customerInfo?.name} src={customerInfo?.profileImage ? customerInfo?.profileImage : customerInfo?.name} /> */}

                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                  <Tooltip title="Account">
                                    <IconButton
                                      onClick={handleClick}
                                      size="small"
                                      sx={{ ml: 2 }}
                                      aria-controls={open ? 'account-menu' : undefined}
                                      aria-haspopup="true"
                                      aria-expanded={open ? 'true' : undefined}
                                    >
                                      <Avatar alt={customerInfo?.name} src={customerInfo?.profileImage ? customerInfo?.profileImage : customerInfo?.name} />
                                    </IconButton>
                                    <span className="firstNameNav">{firstName}</span>
                                  </Tooltip>
                                </Box>
                                <Menu
                                  anchorEl={anchorEl}
                                  className='nav-rightBox'
                                  id="account-menu"
                                  open={open}
                                  onClose={handleClose}
                                  onClick={handleClose}
                                  slotProps={{
                                    paper: {
                                      elevation: 0,
                                      sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                          width: 32,
                                          height: 32,
                                          ml: -0.5,
                                          mr: 1,
                                        },
                                        '&::before': {
                                          content: '""',
                                          display: 'block',
                                          position: 'absolute',
                                          top: 0,
                                          right: 14,
                                          width: 10,
                                          height: 10,
                                          bgcolor: 'background.paper',
                                          transform: 'translateY(-50%) rotate(45deg)',
                                          zIndex: 0,
                                        },
                                      },
                                    },
                                  }}
                                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                  <MenuItem onClick={() => (navigate('/profile'), handleClose())} >
                                    <Avatar alt={customerInfo?.name} src={customerInfo?.profileImage ? customerInfo?.profileImage : customerInfo?.name} /> Profile
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}> 
                                    <ListItemIcon>
                                      <ShoppingCartIcon  />
                                    </ListItemIcon>
                                    Orders
                                  </MenuItem>
                                  <Divider />
                                  <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                      <FavoriteIcon  />
                                    </ListItemIcon>
                                    Favourite
                                  </MenuItem>
                                  <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                      <Logout  />
                                    </ListItemIcon>
                                    Logout
                                  </MenuItem>
                                </Menu>
                        </> 
                        : 
                            <Button variant="contained" className="SignInBTNav" onClick={() => navigate("/sign-in")}>Sign In</Button> 
                        
                    }

                        {/* Hamburger (mobile) */}
                        <button
                            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ===== MOBILE MENU ===== */}
            <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true">
                {NAV_LINKS.map(({ label, href }) => (
                    <NavLink
                        key={label}
                        to={href}
                        onClick={() => {setMenuOpen(false);}}>
                        {label}
                    </NavLink>
                ))}
            </div>
        </>
    );
}