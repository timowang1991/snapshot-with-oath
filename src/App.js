import React, { Component } from 'react';
import { InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import './App.css';
import searchOathData from './searchOathData';
import PersonOathListItem from './PersonOathListItem';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: searchOathData()
        };
    }

    getSearchResults = (e) => {
        this.setState({
            data: searchOathData(e.target.value.toLowerCase())
        });
    }

    render() {
        return (
            <div className="App">
                <div className="app-title">
                    <span id="app-search-title">Search Your</span>
                    <span id="oath-title">Oath</span>
                    <span id="colon-title">:</span>
                </div>
                <InputGroup id="search-bar" bsSize="large">
                    <InputGroup.Addon>
                        <Glyphicon glyph="glyphicon glyphicon-search" />
                    </InputGroup.Addon>
                    <FormControl
                        type="text"
                        placeholder="Search by name..."
                        onChange={this.getSearchResults}
                    />
                </InputGroup>
                <ul id="search-result-list-wrapper">
                {
                    this.state.data.map((item, idx) =>
                        <PersonOathListItem key={`PersonOathListItem-${idx}`} {...item} />
                    )
                }
                </ul>
            </div>
        );
    }
}

export default App;
