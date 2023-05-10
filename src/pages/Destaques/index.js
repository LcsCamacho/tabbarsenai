import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  StatusBar, 
  SafeAreaView, 
  Platform, 
  FlatList,
  Image,
  TouchableOpacity,
 } from 'react-native';
import React, { useState } from 'react';

const statusBarHeight = StatusBar.currentHeight;

const array = Array.from({length: 20}, (_, i) => i + 1);

export default function Destaques() {
  const [mostrarConteudo, setMostrarConteudo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.title} 
            onPress={() => setMostrarConteudo(!mostrarConteudo)}
          >Mostrar conteúdo</Text>
        </View>
        {mostrarConteudo && (
          <FlatList
            style={styles.flatList}
            data={array}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.conteudo}>
              <Image style={styles.conteudoImagem} 
                source={"https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
              <Text style={styles.conteudoText}>Destaque</Text>
            </TouchableOpacity>
          )}
        />
        )}

      </ScrollView>

    </SafeAreaView>
  );
}
//boxshadow no content
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  conteudo: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    flex: 1,
    width: '97%',
    gap: 10,
    height: 100,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  viewTitle: {
    maxHeight: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  conteudoText: {
    color: '#000',
    fontSize: 20,
  },
  flatList: {
    flex: 1,
    width: '100%',
    paddingBottom: 100,
  },
  conteudoImagem: {
    padding: 10,
    width: 80,
    height: 80,
  }
});
