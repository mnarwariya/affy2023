import { Component } from "react";

class Contact extends Component
{
    constructor()
    {
        super()
        this.state={
            fullname:'Maahi Singh',
            email:'mnarwariya369@gmail.com',
            mobile:'7869575673',
            message:'React Is Good'
        }
    }
    changeallhan=(event)=>
    {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }
    submitallhan=(event)=>
    {
        alert(`        My name is ${this.state.fullname}
        My email is ${this.state.email}
        My Phone No. is ${this.state.mobile}
        My Message is ${this.state.message}`)

        event.preventDefault();
    }
    render()
    {
        return(
            <div>
                <h1>My Form Handling</h1>
                <form onSubmit={this.submitallhan}>
                    <input type="text" name="fullname" placeholder="Enter your Name" onChange={this.changeallhan}></input><br/><br/>
                    <input type="email" name="email" placeholder="Enter your Email" onChange={this.changeallhan}></input><br/><br/>
                    <input type="password" name="password" placeholder="Enter your Password" onChange={this.changeallhan}></input><br/><br/>
                    <input type="number" name="mobile" placeholder="Enter your Phone" onChange={this.changeallhan}></input><br/><br/>
                    <textarea rows="4" cols="23" name="message" placeholder="Enter your Message" onChange={this.changeallhan}></textarea><br/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
export default Contact;

