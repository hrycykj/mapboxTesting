import MapboxGL from '@react-native-mapbox-gl/maps';

const CentreMapView = (props) => {
    const coords1 = props.coords1
    const coords2 = props.coords2

    const calcCentreCoordinate = (coord1, coord2) => {
        let long = (coord1[0]+coord2[0])/2
        let lat = (coord1[1]+coord2[1])/2
        return [long, lat]
      }
    
      const calcZoomLevel = (coord1, coord2) => {
        let zoom = Math.floor(Math.log2(Math.abs(360/(coord1[0]-coord2[0]))))-1
        return zoom
      }
    
    return (
        <MapboxGL.Camera
        zoomLevel={calcZoomLevel(coords1, coords2)}
        // bearing={0}
        pitch={0}
        centerCoordinate={calcCentreCoordinate(coords1, coords2)}
        animationMode={'flyTo'}
        animationDuration={2000}
        />
    )
}

export default CentreMapView