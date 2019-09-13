import React, {Component} from 'react';

class BudgetList extends Component {
    render() {
        let durum=null;
        const {sil,tumSil,duzenle}=this.props;
        let tot=0;
        const acList=this.props.list.map((elem,i) =>{
            tot+=parseInt(elem.amount);
            durum=true;
            return(
          <div key={i} className={"butget-list col-md-10  mx-auto  p-3 mt-2"}>
              <div className={"row form-inline"}>
                  <div className={"col-md-4 "}>{elem.change}</div>
                  <div className={"col-md-4  text-center"}>
                      <div className={"text-white butget-list-a"}><i className={"fa fa-dollar text-white fa-sm"}></i> {elem.amount} </div>
                  </div>
                  <div className={"col-md-4 bg-drk"}>
                      <i onClick={()=> sil(elem.id)} className={"fa fa-trash text-success m-1"}></i>
                      <i onClick={()=> duzenle(elem.id)} className={"fa fa-edit text-danger m-1"} ></i>
                  </div>
              </div>

          </div>

            )
        });
        return (
            <div><div>

              <div className={"butget-list-bas mt-5 "}>
                  {acList}
              </div>
                {durum ?
  <div className={" mt-4 text-center"}>
                   <a className={"text-white butget-list-a"} onClick={tumSil}> CLEAR EXPRESSİON <i className={"fa fa-trash text-white fa-sm"}></i></a>
            </div>:null } </div>


            </div>
        );
    }
}

export default BudgetList;