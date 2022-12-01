import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Controls({togglePlayPauseBtn, pause}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      </TouchableOpacity>

      {pause ? (
        <TouchableOpacity style={styles.playPauseBtn} onPress={togglePlayPauseBtn}>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playPauseBtn} onPress={togglePlayPauseBtn}>
        </TouchableOpacity>
      )}

      <TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#C4BFE7',
    width: '100%',
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    height: 200,
  },
  playPauseBtn: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "#1b1246",
    margin: 26,
  },
});
