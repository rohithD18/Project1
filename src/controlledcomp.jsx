import React from "react";

export default class ControlledComp extends React.Component{
    constructor(props){
        super(props);
        this.fileUpload = React.createRef();
        this.state = {
            username: ""
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.fileUpload);
        alert(`You Selected ${this.fileUpload.current.files[0].name}`);
        // alert(`You Selected ${this.fileUpload.current.files[0]}`);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username: <input type="text" name="username" id="username" />
                </label>
                <label>
                    UploadFile: <input type="file" ref={this.fileUpload}/>
                </label>
                <button name="submitName">Submit</button>
            </form>
        );
    }
}