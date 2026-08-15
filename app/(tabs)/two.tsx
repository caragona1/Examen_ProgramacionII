import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

interface Estudiante {
  id: number;
  nombre: string;
}

export default function EstudiantesScreen() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: 1, nombre: 'Angie Morales' },
    { id: 2, nombre: 'Melany Arana' },
    { id: 3, nombre: 'Vilma Polanco' },
    { id: 4, nombre: 'Elber Aragón' },
  ]);

  const agregarEstudiante = () => {
    const nuevoEstudiante: Estudiante = {
      id: Date.now(),
      nombre: `Estudiante #${estudiantes.length + 1}`,
    };
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Estudiantes</Text>
      
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
          </View>
        )}
      />

      <Button title="Agregar Nuevo Estudiante" onPress={agregarEstudiante} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
  },
});
