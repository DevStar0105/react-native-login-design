import React, { useState } from "react";
import { TextInput, useTheme } from "react-native-paper";

export function TextInputDefault(props) {
  const [showSecureText, setShowSecureText] = useState(true);
  const { colors } = useTheme();
  if (props.isPasswordField) {
    return (
      <TextInput
        style={{ backgroundColor: colors.white }}
        secureTextEntry={showSecureText}
        right={
          <TextInput.Icon
            onPress={() => setShowSecureText((value) => !value)}
            name={showSecureText ? "eye-off" : "eye"}
          />
        }
        {...props}
      ></TextInput>
    );
  }

  return (
    <TextInput style={{ backgroundColor: colors.white }} {...props}></TextInput>
  );
}
