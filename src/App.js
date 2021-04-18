import React, { useState } from 'react';
import Alert from './Alert';
import List from './List';

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEdit, setIsEdit] = useState("");
    const [alert, setAlert] = useState({
        show: false,
        type: "",
        msg: ""
    });

    const handleSubmit= (event) => {
        event.preventDefault()
        if(!name){
            //alert
        }else if (name && isEdit) {
            //edit alert
        }else{
            //success alert
            setAlert({show: true, type: "success", msg: "item added"})
            const newItems= ({id: new Date().getTime.toString, title: name})
            setList([...list, newItems]);
            setName("")
        }
    }

    const submitList = () => {

    }
    return(
        <section className= "section-center">
            <div className= "grocery-form">
                <Alert {...alert}/>
                <h3>Grocery List</h3>
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
                <List list = {list} />
                <button className= "clear-btn">clear all items</button>
            </div>
        </section>        
    )
}
export default App;