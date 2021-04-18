import React, { useState } from 'react';
import Alert from './Alert';

function App() {
    const [name, setName] = useState("");
    const [alert, setAlert] = useState({
        show: true,
        type: 'danger',
        msg: ""
    });

    const handleSubmit= (event) => {
        event.preventDefault()
        console.log("hello");
    }
    return(
        <section className= "section-center">
            <div className= "grocery-form">
                <Alert {...alert}/>
                <h3 className= "title">Grocery List</h3>
            </div>
            <form className= "form-control" onSubmit={handleSubmit}>
                <input
                    className= "grocery"
                    type= "text"
                    placeholder= "grocery list"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <button className= "submit-btn">Submit</button>
            </form>
            <div className= "grocery-container">
                <button className= "clear-btn">clear all items</button>
            </div>
        </section>
        
    )
}
export default App;