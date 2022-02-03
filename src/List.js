import React from 'react'
import PropTypes from 'prop-types'
import {FaEdit,FaTrash} from 'react-icons/fa';
function List  ({items,removeItem,editItem})  {

    return (
        <>
        <div className='todo-list'>
            {items.map((item) => {
                const {id,title} = item;
                return (
                    <article className='todo-item' key={id}>
                        <p className='title'>{title}</p>
                        <div className= 'btn-container'>
                            <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                                <FaEdit />
                            </button>
                            <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
        </>
    )
}

List.propTypes = {
    items: PropTypes.array,
    removeItem: PropTypes.bool,
    editItem: PropTypes.func,
}
export default List;