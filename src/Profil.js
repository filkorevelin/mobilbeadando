import React, { Component } from "react";
import { Image } from "react-native";

export default class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'Profil',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
      );
    }
    }
  