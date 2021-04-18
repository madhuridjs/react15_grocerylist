import React from 'react';

const List= ({list}) => {
    return(
        <div className="grocery-list">
            {list.map((item) => {
                const {id, title} = item;
                return(
                    <article className= "grocery-item" key= {id}>
                        <p className="title">{title}</p>
                    </article>
                )
            })}
        </div>
    )
}
export default List;