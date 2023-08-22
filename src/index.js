import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const Component = (props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Component.propTypes = {
  text: PropTypes.string,
};

Component.defaultProps = {
  text: 'Hello World!',
};

export default Component;
