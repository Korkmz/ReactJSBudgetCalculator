import React,{Component} from 'react';
import './App.css';
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";
import uuid from 'uuid';
import BudgetTotal from "./components/BudgetTotal";

class App extends Component{
    state= {
        list:[],
        id:uuid(),
        change:'',
        amount:'',
        updateSta:false,

    };

    addButget =(e) =>{
        e.preventDefault();
        let change1=document.getElementById("ch1").value;
        let let1=document.getElementById("lt1").value;

        let newButget ={ change:change1,amount:let1 ,id:uuid()}
        let updateNew=[...this.state.list,newButget];
        this.setState({
        list:updateNew,
        id:uuid(),
        change:'',
        amount:'',
        updateSta:false,

        })

    };
    sil=(id)=>{
        const updateBut=this.state.list.filter(list=> list.id !== id);
        this.setState({list:updateBut});
    };

    tumSil=()=>{
         this.setState({
             list:[],
             id:uuid(),
             change:'',
             amount:'',
        updateSta:false,

        })

    };
    duzenle=(id)=>{
        const updateBut=this.state.list.find(list=> list.id === id);
        document.getElementById("ch1").value=updateBut.change;
        document.getElementById("lt1").value=updateBut.amount;


        const updateButs=this.state.list.filter(list=> list.id !== id);
        this.setState({
            list:updateButs,
            updateSta:true,
        });

        console.log(this.state.updateSta);





    };
  render() {
    return (
        <div className={"container mt-5"}>
          <h4 className={"text-white text-center mb-4"}>Budget Calculator</h4>

          <div className={"col-md-8 mx-auto banner-main p-4"}>
              <BudgetForm addButget={this.addButget} updateSta={this.state.updateSta}
             />
              <BudgetList list={this.state.list} sil={this.sil} tumSil={this.tumSil} duzenle={this.duzenle}/></div>
        </div>
    );
  }

}

export default App;
