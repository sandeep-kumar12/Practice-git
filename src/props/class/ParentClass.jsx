import React,{Component} from 'react';
import ChildClass from './ChildClass';


class ParentClass extends Component{


    fullName = "sandeep kumar"


    testing(data){
        console.log(data)
    }
    


    render(){
        return(
            <div>
                parent class props
                <div>
                    <ChildClass  fullname ={this.fullName} test = {this.testing}/>
                </div>
            </div>

        )
    }
}
export default ParentClass;