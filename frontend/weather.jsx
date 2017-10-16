import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: null,
      city: null
    };
  }

  componentDidMount() {
    const geo = navigator.geolocation;
    if (geo) {
      geo.getCurrentPosition(this.getPosition.bind(this));
    }
  }

  getPosition(position) {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=d44e61cfdd9c34c93b5bb95132503119&units=imperial`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let resObj = JSON.parse(request.responseText);
        const temp = resObj.main.temp;
        const city = resObj.name;
        this.setState({ temp, city });
      }
    };
    request.send();
  }

  render() {
    const { temp, city } = this.state;
    let element = null;
    if (temp && city) {
      element = [<p key={0}>{temp}{' '}{'F'}</p>, <p key={1}>{city}</p>];
    } else {
      element = <h3 className='center-helper'>{'loading weather...'}</h3>;
    }
    return (
      <div className='outer-box'>
        <h1 className='font-style header'>Weather</h1>
        <div className='inner-box bg-green font-style text-center'>
          {element}
        </div>
      </div>
    );
  }
}

export default Weather;
