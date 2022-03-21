import React from 'react';


class form extends React.Component {
    render() {
        return (
            <div>
                <form id="add-item" action="http://127.0.0.1:8000/todo/" method="post">
                    <label>Name</label><input type="text"></input>
                    <label>description</label><input type="text"></input>
                    <label>completed</label><input type="checkbox"></input>
                </form>
            </div>
        )
    }
}

export default form;