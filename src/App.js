import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is favorite JS library among engginers',
  },
  {
    title: 'how do you use React?',
    content: 'You use React by creating components',
  }
]

const options = [
  {
    label: "The color is Red",
    value: "red",
  },
  {
    label: "The color is Green",
    value: "green",
  },
  {
    label: "The color is Blue",
    value: "blue",
  }
];

const App = () => {  
  return (
    <div>
      {/* <Search />       */}
      <Dropdown options={options}/>
      {/* <Accordion items={items}/> */}
    </div>
  );
};

export default App;