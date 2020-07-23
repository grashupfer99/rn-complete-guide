import React, { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from 'react-native';

export default function GoalInput(props) {
  const [goal, setGoal] = useState('');
  const handleInput = (enteredText) => setGoal(enteredText);
  const handleClose = () => {
    props.onAddGoal(goal)
    setGoal('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleInput}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={handleClose}
            />

          </View>
        </View>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row', // default: column
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  },
  button: {
    width: '45%',
    paddingHorizontal: 5,
    backgroundColor: '#eee'

  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  },

});
