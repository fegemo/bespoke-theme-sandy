const bespoke = require('bespoke'),
  sandy = require('../../lib/bespoke-theme-sandy.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  overview = require('bespoke-simple-overview'),
  math = require('bespoke-math'),
  search = require('bespoke-search'),
  hash = require('bespoke-hash'),
  state = require('bespoke-state');

bespoke.from('article', [
  sandy({ insertFonts: false }),
  keys(),
  touch(),
  state(),
  scale('transform'),
  progress(),
  math(),
  hash(),
  overview({ insertStyles: false }),
  bullets('.bullet'),
  search({
    insertStyles: false
  }),
  deck => {
    // makes the content visible to avoid FoUC
    deck.parent.style.visibility = 'visible';
  }
]);
