import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./Layout/WebsiteLayout";
import Home from "./Pages/Home/Home";
import GroupOrder from "./Pages/GroupOrder/GroupOrder"
import Contact from "./Pages/Contact/Contact"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';


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
        </Route>

      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
