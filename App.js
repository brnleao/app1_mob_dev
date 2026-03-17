import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HidratacaoApp() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);

  useEffect(() => {
    if (copos >= 8) {
      setMeta(true);
    } else {
      setMeta(false);
    }
  }, [copos]);

  const adicionarCopo = () => {
    setCopos(copos + 1);
  };

  const resetar = () => {
    setCopos(0);
  };

  return (
    <View style={[styles.container, meta && styles.metaAtingida]}>
      <Text style={styles.titulo}>💧 Contador de Hidratação</Text>

      <Text style={styles.contador}>{copos} copos</Text>

      <Text style={styles.emojis}>
        {"🥤".repeat(copos)}
      </Text>

      {meta && (
        <Text style={styles.metaTexto}>
          🏆 Meta do dia atingida!
        </Text>
      )}

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarCopo}>
        <Text style={styles.textoBotao}>+ Adicionar Copo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
        <Text style={styles.textoBotao}>Resetar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  metaAtingida: {
    backgroundColor: "#063970",
  },

  titulo: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },

  contador: {
    fontSize: 50,
    color: "#00d4ff",
    marginBottom: 10,
  },

  emojis: {
    fontSize: 30,
    marginBottom: 20,
  },

  metaTexto: {
    fontSize: 22,
    color: "#4caf50",
    marginBottom: 20,
    fontWeight: "bold",
  },

  botaoAdicionar: {
    backgroundColor: "#2196f3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },

  botaoReset: {
    backgroundColor: "#ff5252",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});