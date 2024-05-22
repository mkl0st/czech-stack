import { Icon } from '@components/elements/Icon';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domů | Czech Stack',
  description: 'Czech Stack',
};

export default function Home() {
  return (
    <h1>
      <Icon name="home" />
      Domů
    </h1>
  );
}
