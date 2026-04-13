import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';


// ==========================
// External Component Imports
// ==========================

// Iconify setup
// Run `npm install @iconify/react` to install the Iconify React component.
import { Icon } from '@iconify/react'; // Import the entire Iconify library.



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
  Icon: Icon, // Make the iconify Icon component available in MDX as <icon />.
  DocCardList, // Make the DocCardList component available in MDX as <DocCardList />.
};
