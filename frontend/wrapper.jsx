import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

const Wrapper = (props) => {
  return (
    <div className='flex-cont'>
      <Clock />
      <Weather />
      <Autocomplete names={props.names} />
      <Tabs tabs={props.tabs} />
    </div>
  );
};

export default Wrapper;
