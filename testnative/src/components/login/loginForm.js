import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';

import List from '../list/list';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          password: '',
        };
      }

    update(){
        this.TextInput.clear();
    }

    render(){
        return (
            <KeyboardAvoidingView behavior='position'>
                <View style={styles.container}>
                    <TextInput
                        ref = { input => { this.TextInput = input}}
                        placeholder="Usuario"
                        placeholderTextColor="#FFF"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(user) => this.setState({user})}
                        style={styles.input}/>
                    <TextInput 
                        placeholder="Contraseña"
                        placeholderTextColor="#FFF"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                        onChangeText={(password) => this.setState({password})}
                        onEndEditing={() => this._handleNextPress(this.props.navigateDest)}
                        />
                    <TouchableOpacity style={styles.buttonContainer}
                                    onPress={() => this._handleNextPress(this.props.navigateDest)}>
                        <Text style={styles.buttonText}> Entrar </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    

    _handleNextPress(destino) {
        if (this.state.password == 'luis' && this.state.user == 'luis')
        {
            destino.push({
                component: List,
                title: 'Usuarios',
                passProps: {navigator: this.props.navigateDest}
            });
        }
        else
        {
            Alert.alert(
                'Towa',
                'Usuario o contraseña incorrecto',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
                )
        }
      }

}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#ffbe76',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#d35400',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});
