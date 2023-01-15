import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout( { 
  onToglleTheme, selectedTheme 
}) {
  return (
    <>
      <Header 
        onToglleTheme={onToglleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer 
        onToglleTheme={onToglleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
