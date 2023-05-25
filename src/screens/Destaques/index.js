import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Usuario from "../../components/usuario";
const statusBarHeight = StatusBar.currentHeight;
import usuarios from "../../mocks/usuarios";
const array = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Destaques() {
  const [mostrarConteudo, setMostrarConteudo] = useState(false);
  const setItem = async (key, value) => {
    if (Platform.OS === "web") {
      window.localStorage.setItem(key, value);
      return;
    }
    AsyncStorage.setItem(key, value);
  };

  console.log(Platform.OS);
  const gerarPrecoAleatorio = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewTitle}>
        <Text
          style={styles.title}
          onPress={() => setMostrarConteudo(!mostrarConteudo)}
        >
          Mostrar conteúdo
        </Text>
      </View>
      {mostrarConteudo && (
        <FlatList
          style={styles.flatList}
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <Usuario key={item.id} item={item} />;
          }}
        />
      )}
    </SafeAreaView>
  );
}
//boxshadow no content
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
  },
  containerAnimacao: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  conteudo: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
    flex: 1,
    width: "97%",
    gap: 10,
    height: 100,
    marginBottom: 20,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  viewTitle: {
    maxHeight: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  conteudoText: {
    color: "#fff",
    fontSize: 20,
  },
  preco: {
    color: "#f1f1f1",
    fontSize: 20,
    alignSelf: "flex-end",
  },
  flatList: {
    flex: 1,
    width: "100%",
    paddingBottom: 100,
    paddingBottom: 50,
  },
  conteudoImagem: {
    padding: 10,
    width: 80,
    height: 80,
  },
});
