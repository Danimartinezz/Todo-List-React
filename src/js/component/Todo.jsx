import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPen, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
    
export default class Todo extends React.Component{

    constructor(){
        super();
        this.state={
            onEdit:false,
            editVal:'',
        }
    }

    handleEditValue = (e) =>{
        const{name,value} = e.target;
        this.setState({
            [name]: value
        })
    };

    onEdit = () => {
        this.setState({onEdit:true})
    };

    handleCancel = () => {
        this.setState({onEdit:false})
    };

   
    

    render() 
    {
        const {item, handleDelete} = this.props;
        if(this.state.onEdit){
            return (
                <div className='todo'>
                    <li>
                    <input 
                    type='text'
                    name='editVal'   
                    onChange={this.handleEditValue}
                    /> 
                    </li>
                    <button className='btn'>
                    {/* {<FontAwesomeIcon icon={faSave} className='icon' />} */}
                    </button>
                    <button className='btn' onClick={this.handleCancel}>
                    {/* {<FontAwesomeIcon icon={faTimes} className='icon'/>} */}
                    </button>
                </div>
            )
        }
       else{
           return(
                <div className='todo'>
                    <li>
                    {item}
                    </li>
                    <button className='btn' onClick={handleDelete} >
                    {/* {<FontAwesomeIcon icon={faTrash} className='icon'/>} */}
                    </button>
                </div>
           )
       }
    }
}
