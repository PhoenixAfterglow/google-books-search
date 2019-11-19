import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import Gallery from '../../components/Gallery';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
            lastQuery: ''
        };
    }
    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({ items });
                this.setState({ lastQuery: this.state.query });
                console.log(json);
            });
    }

    render() {
        return (
            <div className="global">
                Hello. I am Data.  I am an Android.  Not an Apple.
                 <div className="logo">
                    <img src="http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png" />
                    <h1 className="logo-text"> Google Play Book Explorer </h1>
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                            onChange={event => this.setState({ query: event.target.value })}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Append>
                            {/* <Button
                                onClick={this.search}
                                variant="outline-secondary" 
                            >
                                Search
                            </Button> */}
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                {/*<Gallery items = {this.state.items} 
                    query = {this.state.lastQuery} 
                    />    */}
            </div>
        )
    }
}

export default Search;