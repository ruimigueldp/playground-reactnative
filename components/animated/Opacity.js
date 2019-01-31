import React, { Component } from 'react';

import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class Opacity extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      opacity: this.state.animation
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
});

export default Opacity;
