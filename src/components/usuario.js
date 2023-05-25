import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Usuario({ item }) {
  return (
    <TouchableOpacity style={styles.conteudo}>
      <Animated.View
        style={styles.containerAnimacao}
        entering={FadeIn.duration(2000)}
      >
        <Image style={styles.conteudoImagem} source={item.foto} />
        <View style={styles.texts}>
          <Text style={styles.conteudoText}>{item.nome}</Text>
          <Text style={styles.conteudoText}>{item.email}</Text>
          <Text style={styles.conteudoText}>{item.nascimento}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 5,
  },
  containerAnimacao: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  conteudoImagem: {
    width: 60,
    height: 90,
    borderRadius: 25,
    backgroundColor: "gray",
  },
  texts: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
    marginLeft: 20,
  },
  conteudoText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  preco: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
