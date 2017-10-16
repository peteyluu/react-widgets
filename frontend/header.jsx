import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.selectedTab(parseInt(e.target.getAttribute('data-id')));
  }

  render() {
    const { selectedTabId, dataId, title } = this.props;
    let element = null;
    if (selectedTabId === dataId) {
      element = <h1 className='title no-border-bottom' data-id={dataId} onClick={this.handleClick}>{title}</h1>;
    } else {
      element = <h1 className='title border-bottom' data-id={dataId} onClick={this.handleClick}>{title}</h1>;
    }
    return element;
  }
}

export default Header;
