import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List= ({list, deleteItem}) => {
    return(
        <div className="grocery-list">
            {list.map((item) => {
                const {id, title} = item;
                return(
                    <article className= "grocery-item" key= {id}>
                        <p className="title">{title}</p>
                        <button className= "delete-btn" onClick= {() => deleteItem(id)}>
                            <FaTrash />
                        </button>
                    </article>
                )
            })}
        </div>
    )
}
export default List;