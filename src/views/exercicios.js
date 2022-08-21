import  React, { useEffect, useState}  from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';



function Exercicios() {
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {setOriginalData(json);setData(json)})

    }, [])

    function renderPost(item) {
        return (
            <View style={styles.card}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.body} numberOfLines={4}>
                    {item.body}
                </Text>
            </View>
        )
    }

    function search(s){
      let arr = JSON.parse(JSON.stringify(originalData))
      setData(arr.filter(d => d.title.includes(s)))

      //remover assentos da pesquisa e do titulo

      //procurar em lower case ou upper

      //script para procurando tanto no titulo ou corpo 
      setData(arr.filter(d => d.title.includes(s) || d.body.includes(s)))
    }
    return (
        <View>
            <SafeAreaView>
                <TextInput 
                  style={styles.input} 
                  placeholder={'Pesquisa aqui'}
                  onChangeText={(s) => search(s)}
                  autoCapitalize="none"
                />
                  
                <FlatList 
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => renderPost(item)}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 14,
        color: '#444',
        fontWeight: '600',
    },
    body: {
        fontSize: 13,
        color: '#777',
        fontWeight: 'normal',
        marginTop: 7,
    },
    input: {
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 10
    }
})

export default Exercicios