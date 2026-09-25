import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {MotionConfig} from 'framer-motion';
import type {AppProps} from 'next/app';
import {Inter} from 'next/font/google';
import {memo} from 'react';

import {ThemeProvider} from '../components/ThemeContext';

const inter = Inter({subsets: ['latin'], display: 'swap'});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      {/* Set on :root so the font also applies inside portalled dialogs */}
      <style global jsx>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
        }
      `}</style>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
});

export default MyApp;
