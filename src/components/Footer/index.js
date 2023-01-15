import React from 'react';

import { Container } from './styles';

export default function Footer( { onToglleTheme, selectedTheme } ) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button"
        onClick={onToglleTheme}
      >
        {selectedTheme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}