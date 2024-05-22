import { PageNavigation } from '@components/blocks/PageNavigation';
import { PageFooter } from '@components/blocks/PageFooter';

import { config } from '@fortawesome/fontawesome-svg-core';

import '@styles/main.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Czech Stack',
  description: 'Czech Stack',
};

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <PageNavigation />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
