import React, { Component } from 'react';

import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class ScaleSpring extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    // the log show the value animated values
    this.state.animation.addListener(({ value }) => {
      console.log(value);
    });

    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          scale: this.state.animation
        }
      ]
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

export default ScaleSpring;
