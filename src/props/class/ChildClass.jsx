import React , {Component}from 'react';


class ChildClass extends Component{

    // componentDidMount(){                 //props can show in console this method
    //     console.log(this.props)
    // }

    transferData = () =>{
        this.props.test(10);
    }

    


    render(){
 
        return(
            <div>
                child  class props

               <p>
               {this.props.fullname}
               </p>
               <p>
                <button onClick={this.transferData}>click me</button>
               </p>
            </div>
        )
    }
}

export default ChildClass;