import React, { Component } from 'react';

import { StyleSheet, View, Animated, Text, ScrollView } from 'react-native';

class Event extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)']
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, backgroundStyle]} />
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
          <Animated.View style={styles.box1} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    height: 150
  },
  box1: {
    height: 3000,
    backgroundColor: '#f6f6f6'
  }
});

export default Event;
