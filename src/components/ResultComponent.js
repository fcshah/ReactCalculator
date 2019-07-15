import React, {Component} from 'react';
import UserInputStateUpdate from './UserInputStateUpdate';

export default class ResultComponent extends Component{

    render(){

        let {result} = this.props;
        return (
            <div className="result">
                 {/* <p> <UserInputStateUpdate input={result}/> </p> */}
                <p>{result}</p>
               
            </div>
        );

    };
} 