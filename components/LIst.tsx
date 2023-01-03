import { View, Text, Image } from "react-native";
import React from "react";
import Items from "./Items";

type Props = {
  database: { id: string; name: string; img: string }[];
  title: string;
};

const List = ({ database, title }: Props) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          paddingHorizontal: 19,
          fontSize: 25,

          fontWeight: "bold",
          color: "#374151",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {database.map((db) => (
          <Items db={db} key={db.id} />
        ))}
      </View>
    </View>
  );
};

export default List;
