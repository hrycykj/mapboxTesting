import MapboxGL from '@react-native-mapbox-gl/maps';

const RoutePolyline = (props) => {
    
    let incomingRoute = {
        route:
          {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [-114.0498765498685, 51.04787754648784],
                    [-114.04988370706592, 51.04769262287585]
                  ]
                }
              }
            ]
          },   
      }
    incomingRoute.route.features[0].geometry.coordinates = props.coordinateArray

    return (

        <MapboxGL.ShapeSource 
            id='line1' 
            shape={incomingRoute.route}
        >
            <MapboxGL.LineLayer 
                id='linelayer1' 
                style={{
                    lineColor:'red',
                    lineWidth:6
                }}
            />
        </MapboxGL.ShapeSource>
    )
}

export default RoutePolyline