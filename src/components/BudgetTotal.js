import React, {Component} from 'react';

class BudgetTotal extends Component {
    render() {
        return (
            <div>
                <div className={"mt-5"}>
                    <h4 className={"text-white text-center mr-2"}>Total Spending :
                        <a className={"text-white butget-list-a ml-2 pt-0 pb-0"}> <i className={"fa fa-dollar text-white fa-sm"}></i> {this.props.tot}</a></h4>
                </div>
                
            </div>
        );
    }
}

export default BudgetTotal;