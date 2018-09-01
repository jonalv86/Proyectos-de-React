import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor() {
	super();
	
	this.state = {
		count: 0,
		number1: 0,
		number2: 0,
		result: 0
	};	
	
	this.handleCountClick = this.handleCountClick.bind(this);
	this.handleResultClick = this.handleResultClick.bind(this);
	this.handleInputChanged = this.handleInputChanged.bind(this);
  }
  
  componentDidMount() {
	  this.setState({
		  count: 1
	  });
  }
  
  handleCountClick(e) {
	  switch (e.target.id) {
		  case "add":
			  this.setState({
				  count: this.state.count + 1
			  });
			  break;
		  case "substract":
			if (this.state.count > 0) {
				this.setState({
					count: this.state.count - 1
				});
			}
			break;
		  case "reset":
			this.setState({
				  count: 0
			  });
		  break;
		  default: break;
	  }
  }
  
  handleInputChanged(e) {
	switch (e.target.id) {
	  case "number1":
		  this.setState({
			  number1: Number(e.target.value)
		  });
		  break;
	  case "number2":
		this.setState({
			  number2: Number(e.target.value)
		  });
		break;
	  default: break;
	}
  }
  
  handleResultClick() {
	  this.setState({
		  result: this.state.number1 + this.state.number2
	  });
  }  
  
  render() {
	  //console.log(this.state.count);
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>
		
		<p>
			<button id="add" onClick={this.handleCountClick}>+</button>
			<button id="substract" onClick={this.handleCountClick}>-</button>
			<button id="reset" onClick={this.handleCountClick}>Reset</button>
		</p>
		<h2>Calculadora:</h2>
		
		<p>
			<input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
			+
			<input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />
			<button id="result" onClick={this.handleResultClick}>=</button>
			{this.state.result}
		</p>
      </div>
    );
  }
}

export default Content;
