// components/Column.js
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DraggableCard from "./DraggableCard";

const Column = ({ title, cards, onCardMove, onCardRelease, zIndex }) => {
  const [cardsState, setCardsState] = useState(cards);

  const handleCardMove = (id, gestureState) => {
    if (onCardMove) {
      onCardMove(gestureState);
    }
  };

  const handleCardRelease = (id, gestureState) => {
    if (onCardRelease) {
      onCardRelease(gestureState);
    }
  };

  const handleCardTextChange = (id, newText) => {
    const newCards = cardsState.map((card) => {
      if (card.id === id) {
        return { ...card, text: newText };
      } else {
        return card;
      }
    });

    setCardsState(newCards);
  };

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      <Text style={styles.titleText}>{title}</Text>
      {cardsState.map((card) => (
        <DraggableCard
          key={card.id}
          id={card.id}
          text={card.text}
          onTextChange={(newText) => handleCardTextChange(card.id, newText)}
          style={styles.card}
          onMove={(id, gestureState) =>
            handleCardMove(card.id, id, gestureState)
          }
          onRelease={(id, gestureState) =>
            handleCardRelease(card.id, id, gestureState)
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 10,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "stretch",
  },
});

export default Column;
