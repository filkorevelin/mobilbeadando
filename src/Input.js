import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
    state = {
        inputField: ""
    };

    inputFieldChangedHandler = val => {
        this.setState({
            inputField: val
        });
    };

    render() {
        let textToDisplay;

        if (this.state.inputField.trim() === "") {
            textToDisplay = "Gepelj valamit!";
        } else {
            textToDisplay = this.state.inputField;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {textToDisplay}
                </Text>
                <TextInput
                    style={{ width: 300 }}
                    placeholder="Itt adhatod meg a szoveget"
                    value={this.state.inputField}
                    onChangeText={this.inputFieldChangedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 18,
        color: 'red',
    }
});