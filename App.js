import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Bruno Leão",
    bio: "Analista de Dados 💻",
    seguidores: "69k",
    info_facul: "Engenharia de Software - 3º Ano",
    frase: "A vida é sobre tentar até conseguir",
    linkedin: "Linkedin",
    github: "Github",
    avatar: "https://blog.futfanatics.com.br/wp-content/uploads/2025/08/cristiano-ronaldo-no-manchester-united-1.jpg",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: usuario.avatar }} style={styles.avatar} />

      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text style={styles.bio}>{usuario.bio}</Text>

      <Text style={styles.info_facul}>{usuario.info_facul}</Text>

      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.seguidores} seguidores</Text>
      </View>

      <View style={styles.redesocial}>
        <Text style={styles.linkedin}>{usuario.linkedin}</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <View style={styles.redesocial}>
        <Text style={styles.github}>{usuario.github}</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <Text style={styles.frase}>{usuario.frase}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#02021A',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: 'red',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  info_facul: {
    fontSize: 14,
    color: 'yellow',
    paddingBottom: 15,
    fontWeight: 'bold',
  },
  stats: {
    backgroundColor: '#3F0047',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    margin: 10
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
  frase: {
    marginTop: "auto",
    color: "gray",
    fontFamily: "serif",
    fontSize: 14,
    padding: 10,
    fontStyle: 'italic',
  },
  linkedin:{
    color: "white",
    paddingRight: 20,
    paddingLeft: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  github:{
    color: "white",
    paddingRight: 20,
    paddingLeft: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  redesocial: {
    backgroundColor: '#3F0047',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    marginTop: 5,
  },
});