import React from 'react';

import { Container } from './styles';

export default function Header( { onToglleTheme, selectedTheme } ) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={onToglleTheme}
      >
        {selectedTheme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}