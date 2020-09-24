import React, {Component} from 'react';
import './counter.less';
import { NavLink } from 'react-router-dom';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      remain: "Start",
      seconds: 0,
      count: 0,
      interval: null,
    };
  }

  handleInput = (event) => {
    this.setState({
      seconds: event.target.value,
    });
  }

  handleSubmit =(event) => {
    event.preventDefault();
    console.log(event.target);
    this.setState({
      remain: 'Start',
      count: this.state.seconds,
    });
    let countDown = setInterval(()=>{
      let total = '' + (this.state.count - 1);
      this.setState({
        remain: total + ' Seconds',
        count: this.state.count - 1,
      });
      if (total <= 0) {
        clearInterval(countDown);
        this.setState({
          remain: 'End',
        });
      }
    }, 1000);
    this.setState({
      interval: countDown,
    });
  }

  componentWillUnmount() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    return (
      <div className="counter-page">
        <div className="counter-title">在线倒计时器</div>
        <p id="counter-box">{this.state.remain}</p>
        <div className="set-time-form">
          <form onSubmit={this.handleSubmit}>
            <label id= "set-time-label" htmlFor="set-time">设置时间</label>
            <input type="number" id="set-time" name="set-time" value={this.state.seconds} onChange={this.handleInput}></input>
            <input ref="start" type="submit" id="submit" value="start" disabled={!(this.state.remain ==='Start' || this.state.remain === 'End')}></input>
          </form>
        </div>
        <NavLink to="/"style={{color: 'black', fontSize: '2em'}}>回到主页</NavLink>
      </div>
    );
  }
}

export default Counter;