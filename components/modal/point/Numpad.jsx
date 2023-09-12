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
    borderRadius: '8px',
    margin: wp(0.3),
    width: wp(9),
    height: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3DEBA',
  },
  text: {
    fontSize: RFValue(27),
    color: '#675D50',
  },
});

export default Numpad;
