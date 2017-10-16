import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.handleSelectedTab = this.handleSelectedTab.bind(this);
  }

  handleSelectedTab(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { selectedTab } = this.state;
    const content = this.props.tabs[selectedTab].content;
    const headers = this.props.tabs.map((tab, idx) => {
      return <Header key={idx} dataId={idx} title={tab.title} selectedTab={this.handleSelectedTab} selectedTabId={selectedTab} />
    });
    return (
      <div>
        <h1 className='font-style header'>Tabs</h1>
        <div className='square-box bg-purple tabs-box font-style'>
          <ul className='flex-tabs-cont'>{headers}</ul>
          <article className='text-center'>{content}</article>
        </div>
      </div>
    );
  }
}

export default Tabs;
