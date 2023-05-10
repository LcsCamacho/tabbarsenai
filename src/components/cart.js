import {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Icone</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        flex: 1,
        top: '10px',
        left: '10px',
        position: 'fixed',
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
});