import React, { useState } from "react";
import Animated from "react-native-reanimated";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";

import { getAnimatedNodes } from "./animatedStyles";

import { styles } from "./styles";

interface SIProps {
  placeholder: string;
  focusOnRender?: boolean;
  yOffset?: Animated.Adaptable<number>;
  onChangeText: (text: string) => void;
  onCancel?: () => void;
}

export const SearchInput = ({ focusOnRender = false, ...props }: SIProps) => {
  const { searchOpacity, topPosition } = getAnimatedNodes(props.yOffset || 0);

  const [inputValue, setInputValue] = useState("");
  const [hideCancelBtn, setHideCancelBtn] = useState(true);

  const handleTextChange = (text: string) => {
    setInputValue(text);
    props.onChangeText(text);
  };

  const handleKeyboardDismiss = () => {
    handleTextChange("");
    setHideCancelBtn(true);
    Keyboard.dismiss();
  };

  const handleCancelBtnPress = () => {
    handleKeyboardDismiss();
    if (props.onCancel) props.onCancel();
  };

  const renderInputContent = () => (
    <>
      <AntDesign
        name="search1"
        size={21}
        color="#fafafa"
        style={{ position: "absolute", left: 25 }}
      />
      <TextInput
        style={styles.searchInput}
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus={focusOnRender}
        selectionColor="#1db954"
        placeholderTextColor="#fafafa"
        placeholder={props.placeholder}
        value={inputValue}
        onChangeText={handleTextChange}
        onFocus={() => setHideCancelBtn(false)}
        onBlur={() => inputValue.length === 0 && setHideCancelBtn(true)}
      />
      {inputValue.length > 0 && (
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <AntDesign
            name="close"
            size={23}
            color="#fafafa"
            style={{ position: "absolute", right: 90 }}
          />
        </TouchableWithoutFeedback>
      )}
      {(!hideCancelBtn || focusOnRender) && (
        <TouchableWithoutFeedback onPress={handleCancelBtnPress}>
          <View style={styles.inputCancelBtn}>
            <Text adjustsFontSizeToFit style={styles.inputCancelBtnText}>
              Cancel
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );

  if (props.yOffset) {
    return (
      <Animated.View style={[styles.inputAbsWrapper, { top: topPosition, opacity: searchOpacity }]}>
        {renderInputContent()}
      </Animated.View>
    );
  } else {
    return <View style={styles.inputWrapper}>{renderInputContent()}</View>;
  }
};
