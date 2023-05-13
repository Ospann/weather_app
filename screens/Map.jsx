import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const UnderConstruction = () => {
    return (
        <MapView
            style={{ width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden' }}
            initialRegion={{
                latitude: 43.23993647596094,
                longitude: 76.93374636597396,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            <Marker coordinate={{ latitude: 43.23993647596094, longitude: 76.93374636597396 }} />
        </MapView>
    );
};

export default UnderConstruction;
