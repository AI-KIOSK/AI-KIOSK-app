import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Numpad(props) {
  const items = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View style={styles.row}>
          <TouchableOpacity style={styles.column}>
            <Text style={styles.text}>{item[0]}</Text>
          </TouchableOpacity>
          {item[1] !== undefined && (
            <TouchableOpacity style={styles.column}>{<Text style={styles.text}>{item[1]}</Text>}</TouchableOpacity>
          )}
          {item[2] !== undefined && (
            <TouchableOpacity style={styles.column}>
              {item[2] !== undefined && <Text style={styles.text}>{item[2]}</Text>}
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(50),
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    borderWidth: 1,
    width: wp(8),
    height: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(32),
    color: '#002B85',
  },
});

export default Numpad;
