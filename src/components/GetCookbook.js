import React, {Component} from 'react';

class GetCookbook extends Component {
    constructor() {
        super(undefined);
        this.state = {
            cookbook: [],
        };
    }

    componentDidMount() {
        fetch('https://XXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .then(results => {
                return results.json();
            }).then(data => {
            let cookbook = data.results.map((book) => {
                return <p key={book}/>
            });
            this.setState({cookbook});
            console.log("state", this.state.cookbook);
        });
    }
    render() {
        return <p className="cookbooks"> {this.state.cookbook} </p>;
    }
}
export default GetCookbook;