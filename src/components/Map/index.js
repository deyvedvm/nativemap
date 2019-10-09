import React, {Component} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
  state = {
    region: null,
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        this.setState({
          region: {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      },
      error => {
        console.log('Error:', error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }

  render() {
    const {region} = this.state;
    return (
      <View style={{flex: 1}}>
        <MapView
          initialRegion={region}
          style={{flex: 1}}
          region={region}
          showsUserLocation={true}
          loadingEnabled={true}
        />
      </View>
    );
  }
}
