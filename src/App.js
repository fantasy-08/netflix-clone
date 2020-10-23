import React from 'react';
import './App.css';
import Row from './Row';
import requests from './options';
import Banner from './banner';
import Nav from './nav';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Nav />
        <Banner />
        <Row title="Top Rated" fetchUrl={requests.top} isLargeRow/>
        <Row title="Trending" fetchUrl={requests.trending} />
        <Row title="Discover" fetchUrl={requests.discover} />
        <Row title="Movie" fetchUrl={requests.movie} />
        <Row title="TV" fetchUrl={requests.tv} />
      </div>      
    )
  }
}

export default App;