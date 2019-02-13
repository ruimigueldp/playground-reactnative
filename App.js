import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Opacity from './components/animated/Opacity';
import Translate from './components/animated/Translate';
import Scale from './components/animated/Scale';
import ScaleSpring from './components/animated/ScaleSpring';
import HeightNWidth from './components/animated/HeightNWidth';
import AbsolutePosition from './components/animated/AbsolutePosition';
import ColorInterpolation from './components/animated/ColorInterpolation';
import Rotation from './components/animated/Rotation';
import Percentage from './components/animated/Percentage';
import Event from './components/animated/Event';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScaleSpring />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //alignItems: 'center',
    //justifyContent: 'center'
  }
});
