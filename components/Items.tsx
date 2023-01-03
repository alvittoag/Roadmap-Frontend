import { View, Text, Image } from "react-native";
import React from "react";
import { DB } from "../Model";

const Items = ({ db }: { db: DB }) => {
  return (
    <View
      style={{
        margin: 5,
        marginTop: 30,
        alignItems: "center",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 20,
          alignItems: "center",
          paddingHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <Image
          resizeMode="center"
          source={{ uri: db.img }}
          style={{ height: 50, width: 50 }}
        />
        <Text style={{ marginTop: 5 }}>{db.name}</Text>
      </View>
    </View>
  );
};

export default Items;
