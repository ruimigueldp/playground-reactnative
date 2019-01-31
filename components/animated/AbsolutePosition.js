import React, { Component } from 'react';

import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AbsolutePosition extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 40,
      duration: 1500
    }).start();
  };

  render() {
    const animatedStyles = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation
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
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 150,
    backgroundColor: 'tomato'
  }
});

export default AbsolutePosition;
