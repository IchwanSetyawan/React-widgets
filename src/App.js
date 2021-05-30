import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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


const showAccordion = () =>{
  if(window.location.pathname === '/'){
    return (
      <div>
        <Accordion items={items} />
      </div>
    )    
  }
}

const showList = () => {
  if(window.location.pathname === '/list'){
    return <Search />
  }
}

const showDropDown = () => {
  if(window.location.pathname === '/dropdown'){
    return <Dropdown options={options} />
  }
}

const showTranslate = () => {
  if(window.location.pathname === '/translate'){
    return <Translate /> 
  }
}



const App = () => {   
  return <div>
    {showAccordion()}   
    {showList()}     
    {showDropDown()}
    {showTranslate()}
  </div>
};

export default App;