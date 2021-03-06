import { Image } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const Marker = (props) => {
    let coords = props.coords
    let img = props.img
    let anchor = props.anchor
    
    return (
        <MapboxGL.PointAnnotation 
                id={'1'}
                title= {'Checkpoint #1'}
                draggable={true}
                coordinate={coords}
                anchor={anchor}
        >
            <Image source={img}
                style={{
                height: 35, width: 35,
                // tintColor: '#fff'
                }}
            />
        </MapboxGL.PointAnnotation>

    )
}

export default Marker