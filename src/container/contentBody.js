import React, { Component } from 'react';
import Input from "../components/input";
import ToDoList from "../components/toDoList";
import Footer from "../container/footer";


class ContentBody extends Component {
    state={
        inputValue: "",
        tasks:[
        ],
        error:"",
        isError: false,
        filterValue: "",
    }
    updateTextHandler = (event)=>{
        this.setState({
            inputValue: event.target.value,
            isError: false,
        })
    }
    submitHandler = ()=>{
        if(this.state.inputValue === ""){
            this.setState({
                isError: true,
                error: "Please Enter Some Task"});
       
        }
        else if(this.state.tasks.findIndex(el=> el.name === this.state.inputValue) !== -1){
            this.setState({
                isError: true,
                error: "Value already exist"});
        }
       
        else{
            const allTaxs =this.state.tasks.slice();
            allTaxs.push({name:this.state.inputValue, status: "active"});
            this.setState({tasks: allTaxs,
            inputValue: ""})
        }
       
        
    }
    deleteItemHandler=(taskName)=>{
        this.setState({
            tasks: this.state.tasks.filter(el => el.name !== taskName)
        })
    }

    enterPressedHandler=(e)=>{
        if (e.key === "Enter") {
           this.submitHandler();
        }
    }

    statusChangeHandler=(task)=>{
        const allTaxs =this.state.tasks.slice();
        const index = allTaxs.findIndex(
            el=> el.name===task
        )
        let status;
        if(allTaxs[index].status === "active"){
            status= "completed"
        }
        else status= "active";
        allTaxs[index].status =status;
        
        this.setState({tasks: allTaxs})
    }
    changeFilterHandler=(e)=>{
        this.setState({
            filterValue: e.target.value,
        })
    }

    render(){

        const toDoList = this.state.tasks.map(task =>{
             if(this.state.filterValue === "" || this.state.filterValue === "all" ){
                return(
                        <ToDoList key={task.name}
                        taskName={task.name}
                        status={task.status}
                        deleteItem={()=>{this.deleteItemHandler(task.name)}}
                        changeStatus={()=>{this.statusChangeHandler(task.name)}} />
                    )
            }
            else if (this.state.filterValue === "active" && task.status === "active"){
                return(
                    <ToDoList key={task.name}
                    taskName={task.name}
                    status={task.status}
                    deleteItem={()=>{this.deleteItemHandler(task.name)}}
                    changeStatus={()=>{this.statusChangeHandler(task.name)}} />
                )
            }
            else if (this.state.filterValue === "complete" && task.status === "completed"){
                return(
                    <ToDoList key={task.name}
                    taskName={task.name}
                    status={task.status}
                    deleteItem={()=>{this.deleteItemHandler(task.name)}}
                    changeStatus={()=>{this.statusChangeHandler(task.name)}} />
                )
            }

            })
           
       

    return(
      <div className="ContentBody">
        <div className="container">
              <Input value={this.state.inputValue} 
                     updateText={(e)=>{this.updateTextHandler(e)}}
                     submit={this.submitHandler} 
                     isError={this.state.isError}
                     errorMsg={this.state.error}
                     enterPressed={(e)=>{this.enterPressedHandler(e)}} />


                    <div className="ToDOListBox">
                    {toDoList}
                    </div>
                </div>
                <Footer
                 total={this.state.tasks.length}
                 active={this.state.tasks.filter(el=> el.status === "active").length}
                 completed={this.state.tasks.filter(el=> el.status === "completed").length}
                 filterChange = {(e)=>this.changeFilterHandler(e)}
                 />
      </div>
      
    )
  }
}

export default ContentBody;