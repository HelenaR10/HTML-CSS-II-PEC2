/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


import * as bootstrap from 'bootstrap';

+(function () {
  const actualPath = window.location.pathname.replace(/^\/|\.html$/g, "");
  const navButton = document.querySelector(`#${actualPath}Button`);
  console.log(actualPath);
  navButton.classList.add('active');
})();