import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function ExecAudio(urls) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [pause, setPause] = useState(false)
  console.log(urls)
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: urls.route.params.urls,
        }}
        useNativeControls={true}
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <TouchableOpacity onPress={tempool}><Text>oio</Text></TouchableOpacity> */}
      {/* <TouchableOpacity onPress={abc}><Text>oiio</Text></TouchableOpacity> */}
      {/* <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View> */}
      {/* <Controls {...{togglePlayPauseBtn}} {...{pause}}/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#8492A6',
    alignItems: 'center'
  },
  buttons: {
    backgroundColor: '#ffffff',

  },
  video: {
    width: '100%',
    marginTop: 80,
    height: 400,
  }
});