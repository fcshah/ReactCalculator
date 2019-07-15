import React,  {Component} from 'react';

export default class UserInputStateUpdate extends Component {

    constructor (props) {
       super(props)
       this.state = {
         input: ''
       }
    }
  
  handleChangeInput = (text) => {
      this.setState({ input: text.target.value })
    }

       
    render () {
  
      return (
         <div>
            <input style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChange={this.handleChangeInput}/>

        <input readOnly style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              value= {this.props.input}/>
       
          </div>
        )
      }
   }