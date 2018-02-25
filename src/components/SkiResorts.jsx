import React, { Component } from 'react';
import './SkiResorts.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skiResorts: [
        {
          name: 'French Alps',
          height: '3000 m',
          price: '2 PLN',
          hours: '10:00-20:00',
          review: 'Great place',
        }
      ],
    }
  }

  renderSkiResort(resort) {
    return (
      <li className='topLevel' key={resort.name}>
        <header>{resort.name}</header>
        <ul>
          <li>
            <span className='label'>Height:</span>{resort.height}
          </li>
          <li>
            <span className='label'>Price:</span>{resort.price}
          </li>
          <li>
            <span className='label'>Opening hours:</span>{resort.hours}
          </li>
          <li>
            <span className='label'>Opinion:</span>{resort.review}
          </li>
        </ul>
      </li>
    )
  }

  render() {
    return (
      <div className="SkiResortsWrapper">
        <ul className="SkiResortsList">
          {this.state.skiResorts.map(resort => this.renderSkiResort(resort))}
        </ul>
      </div>
    );
  }
}

export default App;
