import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// ========================
// Custom Component Imports
// ========================

// Import DocCardList components
// Run `npm run swizzle @docusaurus/theme-classic DocCard -- --eject` to remove the default DocCard component
// Modify `index.js` to allow the use of emojis and Iconify icons in the heading of the DocCard component
import DocCardList from '@theme/DocCardList';



export default {
  // Re-use the default mapping
  ...MDXComponents,
  DocCardList, // Make the DocCardList component available in MDX as <DocCardList />.
};
