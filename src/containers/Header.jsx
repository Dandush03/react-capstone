import React from 'react';

import BarButton from '../components/BarButton';
import Media from '../components/Media';
import Menu from '../components/Menu';

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
