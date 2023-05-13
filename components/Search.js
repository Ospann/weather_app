import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // you may need to install this package

const SearchButton = ({ text, change, click }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Ionicons name="search-outline" size={24} color="gray" style={styles.icon} />
                <TextInput
                    placeholder="Write the city..."
                    style={styles.input}
                    onChangeText={text => change(text.trim())}
                    value={text}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={click}>
                <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderСolor: 'black',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'gray',
    },
    button: {
        backgroundColor: '#007aff',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginLeft: 8,
    },
});

export default SearchButton;
