import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';
import { memo } from 'react';
import { Analytics } from '@vercel/analytics/react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics/>
    </>
  );
});

export default MyApp;
