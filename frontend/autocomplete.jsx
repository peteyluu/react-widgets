import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.handleInputVal = this.handleInputVal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputVal(e) {
    e.preventDefault();
    const inputVal = e.target.value;
    this.setState({ inputVal });
  }

  handleClick(e) {
    e.preventDefault();
    const inputVal = e.target.innerHTML;
    this.setState({ inputVal });
  }

  render() {
    const { inputVal } = this.state;
    const names = [];
    this.props.names.map((name, idx) => {
      if (inputVal && name.indexOf(inputVal) === -1) {
        return;
      }
      names.push(<li className='auto-li' key={idx} onClick={this.handleClick}>{name}</li>);
    });
    return (
      <div>
        <h1 className='font-style header'>Autocomplete</h1>
        <div className='square-box teal-bg font-style'>
          <input type='text' placeholder='Search...' value={this.state.inputVal} onChange={this.handleInputVal} />
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {names}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
