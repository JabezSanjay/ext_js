/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: 'PdWare.Application',

  name: 'PdWare',

  requires: [
    // This will automatically load all classes in the PdWare namespace
    // so that application classes do not need to require each other.
    'PdWare.*',
  ],

  // The name of the initial view to create.
  mainView: 'PdWare.view.main.Main',
});

//open if the menu is closed and close if the menu is open
function toggleMenu() {
  //check if it is mobile

  if (document.getElementById('sidebar').classList.contains('d-none')) {
    console.log('mobile');
    document.getElementById('sidebar').classList.remove('d-none');
    document.getElementById('sidebar').classList.remove('d-sm-block');
  } else {
    document.getElementById('sidebar').classList.toggle('d-none');
  }
}
