import React, { useState } from 'react';

import { Meta, Main, Modals, Nav, GlobalStyles } from './';
import { useColors } from 'lib';

export default function Layout({ children }) {
  const { colors, setColors } = useColors();
  const [showNav, setShowNav] = useState(true);

  const props = {
    colors,
    setColors,
    showNav,
    setShowNav,
  };

  return (
    <>
      <Meta />

      <Modals {...props} />

      <Nav {...props} />

      <Main {...props}>{children}</Main>

      <GlobalStyles {...props} />
    </>
  );
}
