import React, { useState } from 'react';
import Alert from './Alert';
import List from './List';

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEdit, setIsEdit] = useState("");
    const [alert, setAlert] = useState({show: false, type: '', msg: ''});

    const handleSubmit= (event) => {
        event.preventDefault();
        if(!name) {
            showAlert(true,'danger','add grocery item');
        }else if (name && isEdit) {
            //edit alert
        }else{
            //success alert
            showAlert(true, "success", "item added")
            const newItems= {id: new Date().getTime.toString(), title: name};
            setList([...list, newItems]);
            setName("");
        }
    };

    const showAlert = (show= false, type= '', msg= '') => {
        setAlert({show, type, msg });
    };

    const clearItems = () => {
        showAlert(true, 'danger', 'cleared all items')
        setList([])        
    }
    return(
        <section className= "section-center">
            
            <form className= "grocery-form" onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert= {showAlert} list= {list}/>}
                <h3>Grocery List</h3>
                <div className= "form-control">
                    <input
                        className= "grocery"
                        type= "text"
                        placeholder= "grocery list"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <button className= "submit-btn">Submit</button>
                </div>   
            </form>
            <div className= "grocery-container">
                <List list = {list} />
                <button className= "clear-btn" onClick={clearItems}>clear all items</button>
            </div>
        </section>        
    )
}
export default App;