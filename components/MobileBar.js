import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MobileBar = () => {
    const navigation = useNavigation();

    const handleSearchPress = () => {
        navigation.navigate('Search');
    };

    const handleMapPress = () => {
        navigation.navigate('Map');
    };

    const handlePrognoz = () => {
        navigation.navigate('Weather');
    }

    return (
        <TouchableWithoutFeedback>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingHorizontal: 16,
                    backgroundColor: 'black',
                    color: 'white',
                    height: 120,
                    paddingTop: 16,
                }}
            >
                <TouchableOpacity onPress={handleSearchPress}>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>
                                <Ionicons name="trash" size={24} color='white' />
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>Pollution</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMapPress}>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>
                                <Ionicons name="map" size={24} color='white' />
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>Recycle</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePrognoz}>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>
                                <Ionicons name="timer" size={24} color='white' />
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>Forecast</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MobileBar;
