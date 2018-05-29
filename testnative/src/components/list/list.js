import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ListElement from './componentList';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    
    render(){
        const dest = this.props.navigator;

        if(this.state.isLoading){
            return(
                <ScrollView style={{flex: 1, padding: 20}}>
                  <Text>Loading data...</Text>
                </ScrollView>
              )
        }

        return (

            <ScrollView style={styles.container}>
                {this.state.dataSource.map(function(photo){
                    //return <Text>{contact.name}</Text>
                    return <ListElement style={styles.element} 
                                        photo={photo}
                                        key={photo.id}
                                        destino = {dest}
                                        />
                })};
            </ScrollView>

        );
    }

    componentDidMount(){
        //return fetch('http://192.168.10.122:1834/Persona.svc/rest/help/operations/GetContacts')
        return fetch('http://192.168.10.119:1834/Persona.svc/rest/GetContacts#response-json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            let photos = [];
            for (let item in responseJson.ObjectResult)
            {
                photos.push(responseJson.ObjectResult[item]);
            }

            this.setState({
              isLoading: false,
              dataSource: photos,
            }, function(){
    
            });
          })
          .catch((error) =>{
            console.error(error);
          });
      }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0932b'
    },
    element: {
        height: 40,
        padding: 1,
        margin: 100
    }
});


/*
<TouchableOpacity style={styles.buttonContainer}
                                    onPress={() => this.onPress()}>
                        <Text style={styles.buttonText}> Entrar </Text>
                </TouchableOpacity>
*/

/*
contacts:[
                {
                    id: 1,
                    name: 'Luis',
                    lastName: 'Salas',
                    contact: '111 222 333',
                    email: 'ejemplo@towasoftware.com',
                    company: 'Towa',
                    ocupation: 'Software Developer II',
                    photo: ''
                },
                {
                    id: 2,
                    name: 'Juan',
                    lastName: 'Robles',
                    contact: '999 222 333',
                    email: 'ejemplo@towasoftware.com',
                    company: 'Towa',
                    ocupation: 'Software Developer II',
                    photo: ''
                },
                {
                    id: 3,
                    name: 'Erick',
                    lastName: 'Saldivar',
                    contact: '555 222 333',
                    email: 'ejemplo@towasoftware.com',
                    company: 'Towa',
                    ocupation: 'Software Developer I',
                    photo: ''
                }
            ]
*/