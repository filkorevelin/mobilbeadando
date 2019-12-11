import React, { Component } from 'react';
import { StyleSheet, Button, View, ScrollView, Text, Alert, } from 'react-native';

export default class ButtonScreen extends Component {
    state = {
        bodyText: "Bacon ipsum dolor amet burgdoggen capicola turkeys",
        title: "Scroll Down",
        buttonTitle: "Character Count"
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        {this.state.title}
                    </Text>
                    <Text style={styles.bodyText}>
                        {this.state.bodyText}
                    </Text>
                    <Button
                        title={this.state.buttonTitle}
                        style={styles.button}
                        onPress={() => Alert.alert("A szoveg " + this.state.bodyText.length + " karakter")}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    bodyText: {
        fontSize: 16,
        paddingBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    }
});