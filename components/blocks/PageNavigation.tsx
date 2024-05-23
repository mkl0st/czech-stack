import React from 'react';
import Link from 'next/link';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => (
  <nav className="flex items-center border-b border-zinc-300 bg-zinc-100 p-4">
    <h2 className="mr-auto">Czech Stack</h2>
    <ul className="flex gap-4">
      <li className="opacity-65 transition hover:opacity-100">
        <Link href={AppRoute.HOME}>Domů</Link>
      </li>
      <li className="opacity-65 transition hover:opacity-100">
        <Link href={AppRoute.HOME}>Kurzy</Link>
      </li>
      <li className="opacity-65 transition hover:opacity-100">
        <Link href={AppRoute.HOME}>O projektu</Link>
      </li>
      <li className="opacity-65 transition hover:opacity-100">
        <Link href={AppRoute.HOME}>Registrovat se</Link>
      </li>
    </ul>
  </nav>
);
