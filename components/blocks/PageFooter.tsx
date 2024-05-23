import React from 'react';

import { Icon } from '@components/elements/Icon';

export const PageFooter: React.FC = () => (
  <footer className="mt-auto flex gap-4 border-t border-zinc-300 bg-zinc-100 p-4 text-sm">
    <p className="mr-auto">Czech Stack &copy; 2024</p>
    <p className="flex gap-1 text-zinc-800">
      <Icon name="scroll" />
      <span>Licensováno pod GNU GPLv3</span>
    </p>
    <p>
      <a
        className="flex gap-1 text-zinc-800"
        href="https://github.com/mkl0st/czech-stack/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="link" />
        <span>Repozitář</span>
      </a>
    </p>
  </footer>
);
