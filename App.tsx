import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { Database1, Database2, Database3 } from "./db/Database";
import { ScrollView, View } from "react-native";
import List from "./components/LIst";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar style="light" backgroundColor="#FD8A8A" />
      <Header />
      <ScrollView>
        <List database={Database1} title={"Phase 1"} />
        <List database={Database2} title={"Phase 2"} />
        <View style={{ marginBottom: 200 }}>
          <List database={Database3} title={"Phase 3"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
