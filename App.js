import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// FlatList
export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleDeleteItem = (goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter(({ id }) => id !== goalId)
    })
  }

  const addGoal = (goal) => {
    if (goal === '') return;
    setGoals((currentGoals) => [...currentGoals, { id: Date.now().toString(), value: goal }]);
    // setGoal('')
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setIsAddMode(true)}
      />
      {/* nested views */}
      <GoalInput
        onCancel={() => setIsAddMode(false)}
        visible={isAddMode}
        onAddGoal={addGoal}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={itemData => <GoalItem goal={itemData.item.value} onDelete={handleDeleteItem.bind(this, itemData.item.id)} />}
      />
      {/* <ScrollView>
        {
          goals.map((g, i) => <View style={styles.listItem} key={i}>
            <Text >{g}</Text>
          </View>)
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});



// import React from 'react';
// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={{
//       padding: 50,
//       flexDirection: 'row',
//       width: '100%',
//       height: 300,
//       justifyContent: 'space-around',
//       alignItems: 'stretch'
//     }}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'blue',
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }
