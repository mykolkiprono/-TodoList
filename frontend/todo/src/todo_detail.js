import React from "react";

class todo_detail extends React.Component {
    super(props){

    }
    render(){ 
    return (
        <div>
        { this.props.item.id }
        { this.props.item.name }
        { this.props.item.description }
        </div>
    
    )
}
}

export default  todo_detail;