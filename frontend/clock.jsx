import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.getTime = this.getTime.bind(this);
  }

  tick() {
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getTime() {
    let arr = this.state.time.toTimeString().split(' ');
    arr[2] = arr[2].replace(/[()]/g, '');
    return arr[0] + ' ' + arr[2];
  }

  render() {
    const time = this.getTime();
    const date = this.state.time.toDateString();
    return (
      <div className='outer-box'>
        <h1 className='font-style header'>Clock</h1>
        <div className='inner-box bg-orange'>
          <div className='flex-nest-cont'>
            <h4 className='font-style'>Time:</h4>
            <p className='font-style'>{time}</p>
          </div>
          <div className='flex-nest-cont'>
            <h4 className='font-style'>Date:</h4>
            <p className='font-style'>{date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
