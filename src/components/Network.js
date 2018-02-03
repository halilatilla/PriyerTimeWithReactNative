import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { dataChange } from '../redux/actions/index';

const networking = () => {

    axios.get('https://ezanvakti.herokuapp.com/ulkeler')
    .then(response => this.setState({ dataulke: response.data }))
    .catch(error => {
        console.log(error);
        throw error;
    }).then(axios.get(`https://ezanvakti.herokuapp.com/sehirler?ulke=${this.props.ulkeid}`)
    .then(response => this.setState({ datail: response.data }))
    .catch(error => {
        console.log(error);
        throw error;
    })).then( axios.get(`https://ezanvakti.herokuapp.com/ilceler?sehir=${this.props.sehirid}`)
    .then(response => this.setState({ datailce: response.data }))
    .catch(error => {
        console.log(error);
        throw error;
    })).then(axios.get(`https://ezanvakti.herokuapp.com/vakitler?ilce=${this.props.ilceid}`)
    .then(response => this.props.dataChange({ datavakitler: response.data }))
    .catch(error => {
          console.log(error);
          throw error;
    }));
}

    return (



    );

};
