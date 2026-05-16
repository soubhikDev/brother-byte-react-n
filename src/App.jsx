import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import Home from "./Pages/Home/Home";
import GroupOrder from "./Pages/GroupOrder/GroupOrder"
import Contact from "./Pages/Contact/Contact"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Offer from "./Pages/Offer/Offer";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/Blog/BlogDetail";
import Partner from "./Pages/Partner/Partner";
import RestaurantPnr from "./Pages/RestaurantPnr/RestaurantPnr";
import StationMenu from "./Pages/StationMenu/StationMenu";
import Payment from "./Pages/Payment/Payment";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import TermCondition from "./Pages/TermCondition/TermCondition";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";


  const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#e2a9ad',
            '--TextField-brandBorderHoverColor': '#e2434d',
            '--TextField-brandBorderFocusedColor': '#e20613',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

function App() {
  const outerTheme = useTheme();

  return (
    <>
    <ThemeProvider theme={customTheme(outerTheme)}>
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/group-order" element={<GroupOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/restaurant-pnr" element={<RestaurantPnr />} />
          <Route path="/station-menu/:restaurant" element={<StationMenu />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/terms-conditions" element={<TermCondition />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
