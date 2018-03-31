
import React, { Component } from 'react';


export default class TextBox extends Component{
  constructor(props){
    super(props);
    
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        <textarea
         value={this.props.value}
         onChange={this.handleChange}
        />
      </label>

    </form>

    )
  }
}
