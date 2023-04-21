// components/DraggableCard.js
import React, { useState, useRef, useEffect } from "react";
import { PanResponder, Animated, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DraggableCard = ({
  id,
  text,
  onTextChange,
  style,
  onMove,
  onRelease,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [editing, setEditing] = useState(false);
  const textInputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      textInputRef.current.focus();
    }
  }, [editing]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => !editing,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (e, gestureState) => {
        if (onMove) {
          onMove(id, gestureState);
        }
        Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        })(e, gestureState);
      },
      onPanResponderRelease: (e, gestureState) => {
        if (onRelease) {
          onRelease(id, gestureState);
        }
        pan.flattenOffset();
      },
    })
  ).current;

  const handleTextChange = (newText) => {
    if (onTextChange) {
      onTextChange(newText);
    }
  };

  const handleBlur = () => {
    setEditing(false);
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          zIndex: 999,
          position: "absolute",
        },
        style,
      ]}
    >
      {editing ? (
        <TextInput
          ref={textInputRef}
          style={style}
          value={text}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
        />
      ) : (
        <TouchableOpacity onPress={() => setEditing(true)} style={style}>
          <Text>{text}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default DraggableCard;
