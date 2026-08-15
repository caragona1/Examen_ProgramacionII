import { StyleSheet, Text, View } from 'react-native';

export default function EstadisticasScreen() {
  const cantidadEstudiantes = 4;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estadísticas</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Cantidad de estudiantes registrados:</Text>
        <Text style={styles.numero}>{cantidadEstudiantes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    backgroundColor: '#e8f4f8',
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  numero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 10,
  },
});