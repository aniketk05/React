import { Component } from "react";

class ClassBasedCompEx1 extends Component{

    // render -> render method is used to display jsx code on the UI

    // we can declare state outside the constructor 
    // state={
    //     count:0,
    // }
    // let count =0  //! we can't declare variable with var/let/const in class
    constructor()
    {
        // we declare state inside the constructor
        super()
        this.state={
            count : 0,
        }
    }
    render(){
        return(
            <div> 
            <h1>
                Class Based component example</h1>    
                <h1>Count : {this.state.count}</h1>
                <button
                    onClick={()=>{
                        this.setState({
                             count : this.state.count+1   
                            })
                            console.log(this.state)
                    }}
                >increment</button>
            </div>
        )
    }
}

export default ClassBasedCompEx1