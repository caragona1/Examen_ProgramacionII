import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen() {
  const [contador, setContador] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ExamenProgramacionII</Text>
      <Text style={styles.subtitulo}>Contador: {contador}</Text>
      <Button 
        title="Incrementar" 
        onPress={() => setContador(contador + 1)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 20,
  },
});
