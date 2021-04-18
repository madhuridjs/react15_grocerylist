import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
 let list= localStorage.getItem('list')
 if(list) {
     return (list = JSON.parse(localStorage.getItem('list')))
 }else{
     return []
 }
};


function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({show: false, type: '', msg: ''});

    const handleSubmit= (event) => {
        event.preventDefault();
        if(!name) {
            showAlert(true,'danger','add grocery item');
        }else if (name && isEdit) {
            //edit alert
            setList(list.map((item) => {
                if(item.id === editId){
                    return {...item, title: name};
                }
                return item;
            })
            );
            setName('');
            setEditId(null);
            setIsEdit(false);
            showAlert(true, 'success', 'item value changed');
        }else{
            //success alert
            showAlert(true, "success", "item added");
            const newItems= {id: new Date().getTime().toString(), title: name};
            setList([...list, newItems]);
            setName('');
        }
    };

    const showAlert = (show= false, type= '', msg= '') => {
        setAlert({show, type, msg });
    };

    const clearItems = () => {
        showAlert(true, 'danger', 'cleared all items');
        setList([]);        
    };

    const deleteItems = (id) => {
        showAlert(true, 'danger', 'removed items');
        setList(list.filter((item) => item.id !== id));
    };

    const editItems = (id) => {
        const newEditItem = list.find((item) => item.id === id);
        setIsEdit(true);
        setEditId(id);
        setName(newEditItem.title);
        };
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    },[list]);

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
                    <button type= 'submit' className= "submit-btn">{isEdit ? 'Edit' : 'Submit'}</button>
                </div>   
            </form>
            {list.length > 0 && (
            <div className= "grocery-container">
                <List items = {list} deleteItem= {deleteItems} editItems= {editItems} />
                <button className= "clear-btn" onClick={clearItems}>clear all items</button>
            </div>
            )}
        </section>        
    );
}
export default App;