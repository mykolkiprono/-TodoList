import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, IndexRoute } from 'react-router';
// import Axios from 'axios';
// import  form from './form.js';
import todo_detail from './todo_detail';
import './index.css';


class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    fetchData(){
        fetch("http://127.0.0.1:8000/todo/")
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                data:data
            })
        })
    }
    componentDidMount(){
        this.fetchData();
    }


    render() {
        return (
            <div>
               <ul>
                {this.state.data.map(item => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.completed}</p>
                        <p>{item.description}</p>
                        <a href={<todo_detail item/>}>see details</a>
                        </div>
                )
                )}
            </ul>
            </div>
        )
    }
}


// ========================================

ReactDOM.render(
    <div>
    <TodoList />,
    {/* <form /> */}
    </div>,
    document.getElementById('root')
);
