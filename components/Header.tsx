import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#FD8A8A",
        minHeight: 200,
        paddingHorizontal: 10,
        zIndex: 1,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 29,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Roadmap Programming Frontend Developer
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 17,
          marginTop: 12,
        }}
      >
        You can find out about the frontend roadmap here
      </Text>

      <View style={{ marginTop: 15 }}>
        <TextInput
          placeholder="Search... "
          style={{
            backgroundColor: "white",
            paddingVertical: 9,
            paddingHorizontal: 9,
            fontSize: 17,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
