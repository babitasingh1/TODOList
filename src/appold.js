import React, {Component} from 'react';
import Todolist from './Components/Todolist';
import './App.css';

class App extends Component {    
  state = { list: [] };

handleSubmit=()=>{
  const inputtext = document.getElementById('userinput');
    
  if (inputtext.value === '') 
     {alert('Please enter a valid value')}

  else if (this.state.list.find(list => list === inputtext.value ))    
      { alert('This item is already in your list')    
  
  }

  else {const list = this.state.list.concat(inputtext.value);
          this.setState({list}); 
            
      }
      inputtext.value = '';
      
          }

handleDelete =(removedItem) =>{    
  const list = this.state.list.filter(list => list !== removedItem );    
  this.setState({list});
}
            

  render() { 
      return ( 

          <div>
              <h1>ToDoList</h1>
              <input type="text" id="userinput" ></input>
              <Todolist list = {this.state.list} 
              onSubmit = {this.handleSubmit}
              onDelete = {this.handleDelete}
              />

          </div>
       );
  }
}


export default App;
