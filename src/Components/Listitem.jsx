import React, { Component } from 'react';
class ListItem extends Component {
    
    render() { 
        const todoitem = this.props.items;
        return ( 
                        
               <button  className = "btn btn-secondary btn-sm"
               onClick = {()=> this.props.onDelete(todoitem)}>Delete</button>
            
         );
    }
}
 
export default ListItem;