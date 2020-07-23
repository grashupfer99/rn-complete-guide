import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';



const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem;