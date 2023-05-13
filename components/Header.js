import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            backgroundColor: 'black',
            color: 'white',
            height: 100,
            paddingTop: 16
        }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', }}>Polytech</Text>
        </View>
    );
};

export default Header;
