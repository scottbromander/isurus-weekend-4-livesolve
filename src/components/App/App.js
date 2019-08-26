import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: []
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      this.setState({
        galleryList: response.data
      });
    })
    .catch((err) => {
      console.log(`Error in GET: ${err}`)
    })
  }

  putGallery = (event) => {
    console.log(event.target.dataset);
    axios({
      method: 'PUT',
      url: `/gallery/like/${event.target.dataset.meow}`
    })
    .then((response) => {
      this.getGallery();
    })
    .catch((err) => {
      console.log(`Error in GET: ${err}`)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList galleryList={this.state.galleryList} putGallery={this.putGallery}/>
      </div>
    );
  }
}

export default App;
