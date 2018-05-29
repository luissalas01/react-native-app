import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ContactElement extends Component {
    

    render(){

            return (
                <View style={styles.layout}>
                    <View style={styles.logocontainer}>
                        <Image source={{uri: this.props.photo.photo }} style={styles.logo}/>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>Nombre: {this.props.photo.name}</Text>
                        <Text style={styles.title}>Apellido: {this.props.photo.lastName}</Text>
                        <Text style={styles.title}>Telefono: {this.props.photo.contact}</Text>
                        <Text style={styles.title}>Mail: {this.props.photo.email}</Text>
                        <Text style={styles.title}>Compañia: {this.props.photo.company}</Text>
                        <Text style={styles.title}>Puesto: {this.props.photo.ocupation}</Text>
                    </View>
                </View>
            );
    }

}
//this.props.photo.thumbnailUrl 
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#d35400',
    }
    ,
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center'
    },
    logocontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width:150,
        height:250,
        resizeMode: 'contain',
        borderColor: '#fa983a',
        borderWidth: 10,
        marginTop: 50,
        backgroundColor: '#FFF'
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'left',
        fontSize: 20
    }
});
