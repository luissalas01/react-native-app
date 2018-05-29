import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, NavigatorIOS, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm'

export default class LogIn extends Component {
    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../../Images/logoTowa.png')} 
                    />
                    <Text style={styles.title}>Demo app using React Native</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigateDest={this.props.navigator} />
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0932b'
    },
    header: {
        
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {
        flexGrow: 1
    },
    logo:{
        width:220,
        height:220,
        resizeMode: 'contain'
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    }
});


