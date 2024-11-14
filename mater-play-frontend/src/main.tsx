import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
