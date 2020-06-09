import React from 'react';

import BarButton from './BarButton';
import Media from './Media';
import Menu from './Menu';

export default function Header() {
  return (
    <header>
      <div>
        <BarButton />
        <Media />
      </div>
      <Menu />
    </header>
  );
}
