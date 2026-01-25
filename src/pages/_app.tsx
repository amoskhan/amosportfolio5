import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next'; // <-- Add this import
import type {AppProps} from 'next/app';
import {memo} from 'react';

import {ThemeProvider} from '../components/ThemeContext'; // Import ThemeProvider

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
});

export default MyApp;
