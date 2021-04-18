import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List= ({list, deleteItem, editItems}) => {
    return(
        <div className="grocery-list">
            {list.map((item) => {
                const {id, title} = item;
                return(
                    <article className= "grocery-item" key= {id}>
                        <p className="title">{title}</p>
                        <div className= "btn-list">
                        <button className= "edit-btn" onClick= {() => editItems(id)}>
                            <FaEdit />
                        </button>
                        <button className= "delete-btn" onClick= {() => deleteItem(id)}>
                            <FaTrash />
                        </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default List;