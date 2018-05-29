import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ContactElement from './contact';

export default class ListElement extends Component {
    render(){
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._handlePress(this.props.destino)}>
                    <Text style={styles.element}>{this.props.photo.name}</Text>
                    
                    <Text style={styles.element}>{this.props.photo.ocupation}</Text>


                </TouchableOpacity>
            </View>
        );
    }

    _handlePress(destino) {
        destino.push({
            component: ContactElement,
            title: 'Contacto',
            passProps: {photo: this.props.photo}
        });
      }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d35400',
        
        borderColor: '#fa983a',
        borderWidth: 5,
        borderRadius: 10,
        padding: 5
    },
    element: {
        color: '#FFF',
        fontSize: 16,
        paddingVertical: 1,


    }

});