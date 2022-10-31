import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen(urls) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [pause, setPause] = useState(false)
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: "https://mind-app-bucket.s3.sa-east-1.amazonaws.com/audios/1258bffd343dd8ba6be9e92f97147300-1+Minuto+de+Medita%C3%83%C2%A7%C3%83%C2%A3o+para+relaxar.mp3",
                }}
                useNativeControls={true}
                resizeMode="contain"
                isLooping
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