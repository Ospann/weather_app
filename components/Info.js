import React from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const Info = ({ info }) => {
    if (!info) {
        return null;
    }
    const { status, data } = info;
    const { aqi, city } = data;
    const { geo, name } = city;
    let bgColor;
    let text;
    let emoji;
    if (aqi <= 50) {
        text = 'Хорошо';
        bgColor = '#449e48';
        emoji = require('../assets/6559227.png');
    } else if (aqi <= 100) {
        bgColor = '#fbec5d';
        text = 'Умеренный';
        emoji = require('../assets/5591146.png');
    } else if (aqi <= 150) {
        text = 'Не здоровый';
        bgColor = '#fca510';
        emoji = require('../assets/sad.png');
    } else {
        text = 'Опасный';
        bgColor = '#ed2939';
        emoji = require('../assets/4806577.png');
    }

    return (
        <View style={{ display: 'flex', gap: 15 }}>
            <View
                style={{
                    backgroundColor: status === 'ok' ? 'green' : 'red',
                    width: '100%',
                    height: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }}>{text}</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View
                    style={{
                        width: '40%',
                        borderColor: bgColor,
                        borderWidth: 3,
                        borderRadius: 10,
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image source={emoji} style={{ width: 150, height: 150 }} />
                </View>
                <View
                    style={{
                        backgroundColor: bgColor,
                        width: '55%',
                        height: 150,
                        borderRadius: 10,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: 'white', fontSize: 15  }}>Индекс загрязненности</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>{data.aqi}</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 10,
            }}>
                <Text>{name}</Text>
            </View>
            <MapView
                style={{ width: '100%', height: '25%', borderRadius: 10, overflow: 'hidden' }}
                initialRegion={{
                    latitude: geo[0],
                    longitude: geo[1],
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker coordinate={{ latitude: geo[0], longitude: geo[1] }} />
            </MapView>
        </View>
    );
};

export default Info;
