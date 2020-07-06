import React,{Component} from 'react';
import Listitem from './Listitem'

class ToDoList extends Component {    
    
    render() { 
        return ( 

            <div>             
                <ul >{this.props.list.map((item,index) => <li  key={index}>{item}
                     <Listitem items={item} onDelete={this.props.onDelete}/></li>)}
                </ul>
            </div>
         );
    }
}
 
export default ToDoList;