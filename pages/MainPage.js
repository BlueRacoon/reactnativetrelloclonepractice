// // mainpage.js
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import DraggableCard from "../components/DraggableCard";

// const { width, height } = Dimensions.get("window");

// const MainPage = () => {
//   const [cards, setCards] = useState([]);

//   const addCard = () => {
//     setCards((prevCards) => [
//       ...prevCards,
//       { id: `card-${Date.now()}`, text: `Task ${prevCards.length + 1}` },
//     ]);
//   };

//   const handleCardTextChange = (id, newText) => {
//     setCards((prevCards) =>
//       prevCards.map((card) =>
//         card.id === id ? { ...card, text: newText } : card
//       )
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.contentContainer}>
//         <Text style={styles.titleText}>TRELLO BOARD</Text>
//         {cards.map((card) => (
//           <DraggableCard
//             key={card.id}
//             text={card.text}
//             onTextChange={(newText) => handleCardTextChange(card.id, newText)}
//             style={styles.card}
//           />
//         ))}
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={addCard} style={styles.addCardButton}>
//           <Text style={styles.addCardText}>Add Card</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: height * 0.5,
//     backgroundColor: "#f0f0f0",
//   },
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//   },
//   contentContainer: {
//     alignItems: "left",
//     paddingVertical: "5%",
//     paddingHorizontal: "5%",
//     flex: 1,
//   },
//   titleText: {
//     fontWeight: "bold",
//     fontSize: 24,
//   },
//   addTaskButton: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignSelf: "center",
//   },
//   addTaskText: {
//     color: "white",
//     fontSize: 16,
//   },
//   card: {
//     backgroundColor: "#FFF",
//     padding: 10,
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   cardText: {
//     fontSize: 16,
//   },
//   buttonContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   addCardButton: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//   },
//   addCardText: {
//     color: "white",
//     fontSize: 16,
//   },
//   buttonContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   addCardButton: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//   },
//   addCardText: {
//     color: "white",
//     fontSize: 16,
//   },
// });

// export default MainPage;

// pages/MainPage.js
// import React from "react";
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import Column from "../components/Column";

// const MainPage = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.contentContainer}>
//         <Text style={styles.titleText}>TRELLO BOARD</Text>
//       </View>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.columnContainer}
//       >
//         <Column title="To Do" />
//         <Column title="In Progress" />
//         <Column title="Done" />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//   },
//   contentContainer: {
//     alignItems: "center",
//     paddingVertical: "5%",
//     paddingHorizontal: "5%",
//   },
//   titleText: {
//     fontWeight: "bold",
//     fontSize: 24,
//   },
//   columnContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//   },
// });

// export default MainPage;
import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Dimensions } from "react-native";
import Column from "../components/Column";

let { width, height } = Dimensions.get("window");
const MainPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>TRELLO BOARD</Text>
      </View>
      <View style={styles.columnContainer}>
        <Column
          title="To Do"
          cards={[
            { id: 1, text: "Task 1" },
            { id: 2, text: "Task 2" },
          ]}
          onCardTextChange={() => {}}
          zIndex={1} // higher zIndex for the first column
        />
        <Column
          title="In Progress"
          cards={[
            { id: 1, text: "Task 1" },
            { id: 2, text: "Task 2" },
          ]}
          onCardTextChange={() => {}}
          zIndex={0} // lower zIndex for the other columns
        />
        <Column
          title="Done"
          cards={[
            { id: 1, text: "Task 1" },
            { id: 2, text: "Task 2" },
          ]}
          onCardTextChange={() => {}}
          zIndex={0} // lower zIndex for the other columns
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  columnContainer: {
    flexDirection: "row",
    flex: 1,
  },
  column: {
    flex: 1,
    minWidth: 200,
  },
});

export default MainPage;
