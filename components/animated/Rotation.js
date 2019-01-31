import React, { Component } from 'react';

import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';

class Rotation extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '1080deg']
    });

    const animatedStyles = {
      transform: [
        {
          rotate: rotateInterpolate
          //  rotateY: rotateInterpolate, // cross axis can be used
          //  rotateX: rotateInterpolate,
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Animated.Text style={{ color: '#fff' }}>Spin to win !</Animated.Text>
          </Animated.View>
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
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Rotation;
