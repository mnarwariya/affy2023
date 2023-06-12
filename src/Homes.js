import './Home.css'
import { Component } from "react";

class Homes extends Component
{
    constructor()
    {
        super()
        this.state={
            age:64
        }
    }
    agehandle=()=>
    {
        this.setState(
            {
                age:this.state.age+1
            }
        )
    }
    agehandle1=()=>
    {
        this.setState(
            {
                age:this.state.age-1
            }
        )
    }
    render()
    {
        return(
            <div className='start'>
                <h1 className='head'>My Age : {this.state.age}</h1>
                <button onClick={this.agehandle}>Click Me</button>
                <button onClick={this.agehandle1}>Click Me</button>
            </div>
        )
    }
}
export default Homes;