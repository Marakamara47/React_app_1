import React from 'react';

import AppHeader from '../app_header/app_header';
import SearchPanel from '../search_panel/search_panel';
import PostStatusFilter from '../post_status_filter/post_status_filter';
import PostList from '../post_list/post_list';
import PostAddForm from '../post_add_form/post_add_form';

import './app.css';

const App = () => {

    const data = [
        {label: "Going to learn React", important: true, id: "test-1"},
        {label: "That is so good", important: false, id: "test-2"},
        {label: "I need a break...", important: false, id: "test-3"}
    ];

    return (
        <div className = "app">
            <AppHeader/>
            <div className = "search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;