import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './calculator.less';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      expression: '',
    };
  }

  handleInput = (event) => {
    const val = event.target.value;
    this.setState({
      expression: this.state.expression + val,
    });
  }

  hanldeCalculate = (event) => {
    let valid = true;
    let a = '';
    let b = '';
    let operator = '';

    for(let i = 0; i < this.state.expression.length; i += 1) {
      const val = this.state.expression.charAt(i);
      if (val === '+' || val === '-' || val === '*') {
        if (operator !== '' || a === '') {
          valid = false;
        } else {
          operator = val;
        }
      } else {
        if (operator === '') {
          a += val;
        } else {
          b += val;
        }
      } 
    }
    let re = '';
    if (valid) {
      switch (operator) {
        case '+':
          re += parseInt(a) + parseInt(b);
          break;
        case '-':
          re += parseInt(a) - parseInt(b);
          break;
        case '*':
          re += parseInt(a) * parseInt(b);
          break;
        default:
          break;
      }
      this.setState({
        expression: re,
      });
    } else {
      this.setState({
        expression: '',
      });
    }
  }

  handleClear = () => {
    this.setState({
      expression: '',
    }); 
  }

  render() {
    return (
      <div className="calculator-page">
        <div className="calculator-title">在线计算器</div>
        <div className="calculator-body">
          <p id="result">{this.state.expression}</p>
          <form>
            <div className="operators">
              <input type="button" value="+" name="plus" onClick={this.handleInput} />
              <input type="button" value="-" name="minus" onClick={this.handleInput}/>
              <input type="button" value="*" name="multiply" onClick={this.handleInput}/>
            </div>

            <div className="numbers">
              <input type="button" value="7" name="seven" onClick={this.handleInput}/>
              <input type="button" value="8" name="eight" onClick={this.handleInput}/>
              <input type="button" value="9" name="nine" onClick={this.handleInput}/>
            </div>

            <div className="numbers">
              <input type="button" value="4" name="four" onClick={this.handleInput}/>
              <input type="button" value="5" name="five" onClick={this.handleInput}/>
              <input type="button" value="6" name="six" onClick={this.handleInput}/>
            </div>

            <div className="numbers">
              <input type="button" value="1" name="one" onClick={this.handleInput}/>
              <input type="button" value="2" name="two" onClick={this.handleInput}/>
              <input type="button" value="3" name="three" onClick={this.handleInput}/>
            </div>

            <div className="last-row">
              <input type="button" className= "zero" value="0" name="zero" onClick={this.handleInput}/>
              <input type="button" className= "clear" value="clear" name="clear" onClick={this.handleClear} />
              <input type="button" className= "equal" value="=" name="equal" onClick={this.hanldeCalculate}/>
            </div>
          </form>
        </div>
        <NavLink to="/"style={{color: 'black', fontSize: '2em'}}>回到主页</NavLink>
      </div>
    );
  }
}

export default Calculator;