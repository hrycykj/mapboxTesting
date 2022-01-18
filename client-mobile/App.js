import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

import Marker from './components/Marker'
import markerMe from './assets/map_pin2.png'

MapboxGL.setAccessToken('pk.eyJ1Ijoid29vamFlIiwiYSI6ImNreWR5b3UxNTBjMGoyb3NoMjk4eXUxbHcifQ.n4z9_obSqP5bOL6Sq-T5tA');
let coordsSaddledome=[-114.0519, 51.0374]
let coordsMe=[-114.20497, 51.071891317967605]

export default function App() {

  return (
    <View style={styles.page}>
      <Text>Open up App.js to start working on your new app!</Text>
      <View style={styles.container}>
          <Text>Mapbox</Text>
          <MapboxGL.MapView
            style={styles.map}
            pitchEnabled={false}
            rotateEnabled={false}
          >
            <MapboxGL.Camera
              zoomLevel={17}
              // bearing={0}
              pitch={0}
              centerCoordinate={coordsMe}
              animationMode={'flyTo'}
              animationDuration={0}
          	/>
            <Marker
              coords = {coordsMe}
              img = {markerMe}
            />
            {/* <MapboxGL.UserLocation
              visible = {true}
            /> */}
          </MapboxGL.MapView>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
});
