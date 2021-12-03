import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list-components';
import { SearchBox } from "./components/search-box/search-box.components";
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state={
      monsters: [],
      SearchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  handleChange(e){
    this.setState({SearchField:e.target.value})
  }
  render() {
    const {monsters,SearchField}=this.state;
    const filteremonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1> Monster Rolodex</h1>      
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteremonsters}/>
      
      </div>
    );
  } 
}

export default App;
