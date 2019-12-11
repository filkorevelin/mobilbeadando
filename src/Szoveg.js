import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class TextScreen extends Component {
  state = {
    titleText: "Title Goes Here 1/c",
    bodyText: "Bacon ipsum dolor amet burgdoggen capicola turkey, ball tip swine ground round andouille sirloin fatback beef. Meatloaf doner venison jerky buffalo chuck frankfurter drumstick alcatra spare ribs tenderloin shoulder porchetta fatback. Tenderloin sirloin cupim, ball tip fatback tongue picanha short loin. Rump doner tenderloin, buffalo pig ball tip capicola venison brisket swine chuck tri-tip turkey jowl. Ribeye corned beef meatloaf beef ribs meatball fatback ham frankfurter prosciutto pastrami leberkas venison t-bone brisket. Beef ribs bresaola pork chop shankle pastrami.",
    secondTitleText: "Subheader",
    secondBodyText: "Shankle chuck tongue capicola, swine chicken fatback picanha leberkas cow burgdoggen meatball beef shank. Salami spare ribs pork chop brisket shankle tongue burgdoggen kielbasa corned beef strip steak flank meatloaf doner venison turducken. Strip steak meatball ham hock ground round pancetta, sausage rump. Flank leberkas sirloin prosciutto sausage, hamburger bacon kevin porchetta pastrami andouille boudin turkey ham hock. Kielbasa spare ribs cow bacon, ball tip landjaeger corned beef tri-tip. Kevin tail spare ribs picanha sirloin pork loin, prosciutto chuck. Porchetta pastrami shoulder kevin sausage, pork loin landjaeger hamburger pork belly flank pancetta brisket. Turkey salami hamburger short ribs tail ham hock. Alcatra shankle meatloaf cow pork biltong. Venison shankle chicken short ribs. Leberkas picanha bresaola, ribeye alcatra ham salami. Pig meatloaf porchetta cow meatball. Pastrami chuck bacon t-bone meatball ham capicola shankle short loin andouille turkey meatloaf jowl salami. Prosciutto hamburger turkey pig tri-tip jowl. Landjaeger beef tail tongue, filet mignon kevin drumstick. Biltong frankfurter venison cupim, sirloin short ribs tri-tip tongue beef ribs chuck shankle pork chop turkey salami meatloaf",
    thirdTitleText: "Third Title"
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {this.state.titleText}
          </Text>
          <Text style={styles.bodyText}>
            {this.state.bodyText}
          </Text>
          <Text style={styles.secondTitleText}>
            {this.state.secondTitleText}
          </Text>
          <Text style={styles.secondBodyText}>
            {this.state.secondBodyText}
          </Text>
          <Text style={styles.thirdTitleText}>
            {this.state.secondTitleText}
          </Text>
          <Text style={styles.secondBodyText}>
            {this.state.bodyText + " " + this.state.secondBodyText}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    padding: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
  },
  secondTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: 'red',
    textAlign: 'center',
  },
  thirdTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'right',
  },
  secondBodyText: {
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'justify',
  },
});