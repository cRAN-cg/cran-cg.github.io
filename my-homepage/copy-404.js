const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html for GitHub Pages SPA routing
const indexPath = path.join(__dirname, '../docs/index.html');
const notFoundPath = path.join(__dirname, '../docs/404.html');

try {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Successfully copied index.html to 404.html for GitHub Pages SPA routing');
} catch (err) {
  console.error('Error copying index.html to 404.html:', err);
  process.exit(1);
}
