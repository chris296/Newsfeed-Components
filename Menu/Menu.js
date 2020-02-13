/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  const listitem1 = document.createElement('li');
  const listitem2 = document.createElement('li');
  const listitem3 = document.createElement('li');
  const listitem4 = document.createElement('li');
  const listitem5 = document.createElement('li');
  const listitem6 = document.createElement('li');

  menu.appendChild(list);
  list.appendChild(listitem1);
  list.appendChild(listitem2);
  list.appendChild(listitem3);
  list.appendChild(listitem4);
  list.appendChild(listitem5);
  list.appendChild(listitem6);

  menu.classList.add('menu');

  document.querySelector('.menu-button').addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })

  listitem1.textContent = array[0];
  listitem2.textContent = array[1];
  listitem3.textContent = array[2];
  listitem4.textContent = array[3];
  listitem5.textContent = array[4];
  listitem6.textContent = array[5];

  return menu;
}

document.querySelector('.header').appendChild(createMenu(menuItems));

// function createMenu(array) {
//   const menu = document.createElement('div');
//   const list = document.createElement('ul');

//   menu.appendChild(list);
//   array.forEach(element => {
//     list.appendChild(document.createElement('li'));
//   });



//   menu.classList.add('menu');

//   document.querySelector('.menu-button').addEventListener('click', () => {
//     menu.classList.toggle('menu--open');
//   })


//   return menu;
// }

// document.querySelector('.header').appendChild(createMenu(menuItems));