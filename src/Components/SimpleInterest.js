import React, { Component } from 'react';


class SimpleInterest extends Component {
    render() { 
        return ( 
            <React.Fragment>
            <p>
                This is a Simple interest calculator
            </p>

            <form onSubmit={(e) => this.props.calSimpleInterest(e)}>
                <input type="text" name="Amount" placeholder="Amount" />
                <input type="text" name="Rate" placeholder="Rate" />
                <input type="text" name="Time" placeholder="Time" />
                <button>Calculate Simple Interest</button>
            </form>

            { this.props.SI && <p> {this.props.SI} </p> }
        </React.Fragment>
         );
    }
}
 
export default SimpleInterest;