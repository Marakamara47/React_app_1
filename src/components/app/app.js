import React, {Component} from 'react';

import AppHeader from '../app_header/app_header';
import SearchPanel from '../search_panel/search_panel';
import PostStatusFilter from '../post_status_filter/post_status_filter';
import PostList from '../post_list/post_list';
import PostAddForm from '../post_add_form/post_add_form';

import './app.css';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: true, id: 1},
                {label: "That is so good", important: false, id: 2},
                {label: "I need a break...", important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return{
                data: newArr
            }
        })
    }

    addItem(body){
        const newItem = {label: body, important: false, id: this.maxId++};

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return{
                data: newArr
            }
        })
    }

    render () {
        return (
            <div className = "app">
                <AppHeader/>
                <div className = "search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts = {this.state.data} onDelete = {this.deleteItem}/>
                <PostAddForm onAdd = {this.addItem}/>
            </div>
        )
    }
}
