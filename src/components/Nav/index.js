import React from 'react';

function Nav() {
    function categorySelected() {
        console.log("hello")
      }
  return (
    <header>
        <h2>
    <a href="/">
      <span role="wave" aria-label="wave"> </span> Ryan Jolley
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
      <span>Contact</span>
      </li>
      {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
    <span onClick={categorySelected} >
      {category.name}
    </span>
  </li>
))}
    </ul>
  </nav>
    </header>
  );
}

const categories = [
    {
      name: "Front End",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Back-End", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "Full Stack",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];



export default Nav;