import React, {Component} from 'react';
import logo from './logo.svg';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './App.css';
import {Text} from 'react'
import {Modal} from 'react-bootstrap'
import { render } from '@testing-library/react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

let map;
// global array to store the marker object

let markersArray = [];
// let map;
// // global array to store the marker object 
// let markersArray = [];

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
//   addMarker({lat: -34.297, lng: 150.544}, "yellow");
//   addMarker({lat: -34.397, lng: 150.644}, "green");
//   addMarker({lat: -34.597, lng: 150.844}, "blue");
// }

// function addMarker(latLng, color) {
//   let url = "http://maps.google.com/mapfiles/ms/icons/";
//   url += color + "-dot.png";

//   let marker = new google.maps.Marker({
//     map: map,
//     position: latLng,
//     icon: {
//       url: url
//     }
//   });

//   //store the marker object drawn in global array
//   markersArray.push(marker);
// }
export class App extends Component{
  state = {
    stores: [{lat: 18.5590, lng: 73.7868},
            {latitude: 18.6298, longitude: 73.7997},
            {latitude: 18.7557, longitude: 73.4091},
            {latitude: 19.2403, longitude: 73.1305},
            {latitude: 19.2215, longitude: 73.1645},
            {latitude: 19.9975, longitude: 73.7898}],
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    isOpen: false
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  showMarkers = () => {
    return this.state.stores.map((stores, index) => {

    })
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked the marker!")} />
    })
  }
  onMouseoverMarker = () => {
    this.showModal()
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onToggleOpen = () => {
      this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
    <div>  
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 18.5204, lng: 73.8567}}>
          <Marker
            name={'Your position'}
            position={{lat: 18.5590, lng: 73.7997}}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            }} />
          <Marker
            name={'Your position'}
            position={{lat: 19.2403, lng: 73.1305}}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }} />
          <Marker
            name={'Your position'}
            position={{lat: 19.2215, lng: 73.1645}}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }} />
          <Marker
            name={'Your position'}
            position={{lat: 19.9975, lng: 73.7898}}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
            }} />
          <Marker
            name={'Your position'}
            position={{lat: 18.6298, lng: 73.7997}}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            }} />
          <InfoWindow> <h1>Helllloooooo</h1> </InfoWindow>
      </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyArGBDD37bVoDXvdZx_CH0ecnE1B83MgdI'
})(App);
