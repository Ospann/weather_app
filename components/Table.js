import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = ({ data }) => {
    return (
        <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.header}>Урок</Text>
                <Text style={styles.header}>Кабинет</Text>
                <Text style={styles.header}>Преподаватель</Text>
            </View>
            {data.map((option, index) => (
                <View style={styles.row}>
                    <Text style={styles.cell}>{option.lesson}</Text>
                    <Text style={styles.cell}>{option.place}</Text>
                    <Text style={styles.cell}>{option.tutor}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    header: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cell: {
        flex: 1,
        padding: 8,
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: 'gray',
    },
});

export default Table;
