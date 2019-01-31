import React, { Component } from 'react';

import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class HeightNWidth extends Component {
  state = {
    animation: new Animated.Value(150)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500
    }).start();
  };

  render() {
    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    // width: 150, this could be removed since were adding them to state
    // height: 150,
    backgroundColor: 'tomato'
  }
});

export default HeightNWidth;
