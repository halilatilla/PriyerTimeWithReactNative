import React from 'react';
import { Text, View, Platform } from 'react-native';

const Header = (props) => (
            <View style={styles.container} >
                <Text style={styles.welcome} > {props.headerText} </Text>
            </View>

        );


const styles = {
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: Platform.OS === 'ios' ? 60 : 2, 
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.2
    },
    welcome: {
        fontSize: 60,
        //textAlign: 'center',
        //margin: 10,
    },
    //   instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    //   },
};

export default Header;

