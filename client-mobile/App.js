import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

import Marker from './components/Marker'
import CentreMapView from './components/CentreMapView'
import RoutePolyline from './components/RoutePolyline'
import markerMe from './assets/Pin_Trans.png'

const screenMapWidth = Dimensions.get('window').width
const screenMapHeight = Dimensions.get('window').height

MapboxGL.setAccessToken('pk.eyJ1Ijoid29vamFlIiwiYSI6ImNreWR5b3UxNTBjMGoyb3NoMjk4eXUxbHcifQ.n4z9_obSqP5bOL6Sq-T5tA');

const route = [
  {latitude: 51.04787754648784, longitude: -114.0498765498685},
  {latitude: 51.04769262287585, longitude: -114.04988370706592},
  {latitude: 51.04780728888966, longitude: -114.0505864451202},
  {latitude: 51.046185944568315, longitude: -114.05069665072232},
  {latitude: 51.046133578438834, longitude: -114.05098639612481},
  {latitude: 51.04579178023688, longitude: -114.05102948718338},
  {latitude: 51.045716561484234, longitude: -114.05094586682625},
  {latitude: 51.045693105693935, longitude: -114.05072974023673},
  {latitude: 51.04519568760202, longitude: -114.05076962063674},
  {latitude: 51.0452995902993, longitude: -114.0545529482637}
]

let routeGeoJSON = route.map ( (latLong)=>{return ([latLong.longitude,latLong.latitude])})

let coordsFinish=[route[0].longitude,route[0].latitude]//[-114.0519, 51.0374]
let coordsMe=[route[route.length-1].longitude,route[route.length-1].latitude]//[-114.20497, 51.071891317967605]


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
            <CentreMapView 
              coords1 = {coordsMe}
              coords2 = {coordsFinish}
            />
            <Marker
              coords = {coordsMe}
              img = {markerMe}
              anchor = {{x: 0.5, y:1.0}}
            />
            <Marker
              coords = {coordsFinish}
              img = {markerMe}
              anchor = {{x: 0.5, y:1.0}}
            />
            <RoutePolyline
              coordinateArray= {routeGeoJSON}
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
    height: screenMapHeight,
    width: screenMapWidth,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
});
