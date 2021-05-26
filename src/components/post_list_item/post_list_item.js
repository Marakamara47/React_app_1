import React from 'react';

import './post_list_item.css';

const PostListItem = () => {
    return (
        <li className = "app-list-item d-flex justify-content-between">
            <span className = "app-list-item-label">
                hello
            </span>
            <div className = "d-flex justify-content-center align-items-center">
                <button type = "button" className = "btn-star btn-sm">
                    <i className = "fas fa-star"></i>
                </button>
                <button type = "button" className = "btn-trash btn-sm">
                    <i className = "fas fa-trash"></i>
                </button>
                <i className = "fas fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;