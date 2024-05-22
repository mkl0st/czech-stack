import React from 'react';
import Link from 'next/link';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => (
  <nav>
    <h2>Page Navigation</h2>
    <ul>
      <li>
        <Link href={AppRoute.HOME}>Domů</Link>
      </li>
    </ul>
  </nav>
);
