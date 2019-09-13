import React from 'react';

class BudgetForm extends React.Component {
    render() {
        const {addButget,updateSta}=this.props;
        return (
            <div>
                <form>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <label className={"text-muted banner-main-label"} >Change</label>
                            <input className={"form-control border-top-0 border-left-0 border-right-0"} id={"ch1"} placeholder={"e.g. rent"}/>
                        </div>
                        <div className={"col-md-6"}>
                            <label className={"text-muted banner-main-label"} >Amount</label>
                            <input className={"form-control border-top-0 border-left-0 border-right-0" } id={"lt1"} placeholder={"e.g. 100"}/>
                        </div>
                        {updateSta ?  <a className={"text-white mx-auto mt-4 banner-main-a"} onClick={addButget} >UPDATE <i className={"fa fa-paper-plane"}></i></a> :
                         <a className={"text-white mx-auto mt-4 banner-main-a"} onClick={addButget} > SUBMİT<i className={"fa fa-paper-plane"}></i></a>}
              </div>

             </form>
            </div>

        );
    }
}

export default BudgetForm;