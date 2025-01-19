import { Component } from 'react';
import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '', 
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users};
      }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    
    this.setState(() => {
      return { searchField: searchField };
    })
  }

  render(){
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <>
        <div className='App'>
          <h1 className='app-title'>Bruno's Monsters Rolodex</h1>
          <SearchBox
            className='monsters-search-box'
            onChangeHandler={onSearchChange}
            placeholder={'search monsters'}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    )
  }
  
}

export default App
