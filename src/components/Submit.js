import React from 'react';


class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        console.log(this);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Submit Transaction
            </button>
        );
    }
}
export default Submit;