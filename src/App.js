import React, {useState} from 'react';
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
  const [selected, setSelected] = useState(options[0])



  return (
    <div>      
      <Dropdown 
        selected={selected} 
        onSelectedChange={setSelected}
        options={options}
      />      
    </div>
  );
};

export default App;