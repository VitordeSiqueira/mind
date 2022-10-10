import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextComponent } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';



import Controls from './VideoControls';

export default function VideoScreen() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [pause, setPause] = useState(false)
    const [tempo, setTempo] = useState(0)

    // const intervalo = setInterval(meuTempo, 1000)
      
    //   function meuTempo() {
    //     let timer = setInterval(myTimer, 1000)
    //     setInterval(function() {
    //         setTempo(int(status.positionMillis/1000))
    //     }, 1000);

    //   }

    function tempool() {
        setInterval(function() {
            console.log(status)
        }, 1000)
    }

    function stop(){

    }

    function togglePlayPauseBtn() {
        setPause(!pause)
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        
      }

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                }}
                useNativeControls={true}
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity onPress={tempool}><Text>oio</Text></TouchableOpacity>
            {/* <TouchableOpacity onPress={abc}><Text>oiio</Text></TouchableOpacity> */}
            {/* <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View> */}
            <Controls {...{togglePlayPauseBtn}} {...{pause}}/> 
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
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    video: {
        width: '90%',
        marginTop: 80,
        height: 400,
    }
});