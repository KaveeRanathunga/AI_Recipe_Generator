import React from 'react';
import { Image, StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import {Marquee} from '@animatereactnative/marquee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  
import Colors from '../services/Colors'

export default function Landing() {

    const imageList = [
        require('../assets/images/1.jpg'),
        require('../assets/images/2.jpg'),
        require('../assets/images/3.jpg'),
        require('../assets/images/4.jpg'),
        require('../assets/images/5.jpg'),
        require('../assets/images/6.jpg'),
        require('../assets/images/c1.jpg'),
        require('../assets/images/c2.jpg'),
        require('../assets/images/c3.jpg'),

    ]
  return (

    <GestureHandlerRootView>
    <View>
        <Marquee spacing={10} speed={0.9}
        style={{
            transform: [{rotate:'-4deg'}]
        }}>
        <View style={styles.imagecontainer}>
            {imageList.map((image, index) => (
                <Image source={image} key={index} 
                       style={styles.image} />
            ))}
        </View>
        </Marquee> 

           <Marquee spacing={10} speed={0.7}
        style={{
            transform: [{rotate:'-4deg'}],
            marginTop: 10
        }}>
        <View style={styles.imagecontainer}>
            {imageList.map((image, index) => (
                <Image source={image} key={index} 
                       style={styles.image} />
            ))}
        </View>
        </Marquee> 

           <Marquee spacing={10} speed={0.5}
        style={{
            transform: [{rotate:'-4deg'}]
        }}>
        <View style={styles.imagecontainer}>
            {imageList.map((image, index) => (
                <Image source={image} key={index} 
                       style={styles.image} />
            ))}
        </View>
        </Marquee> 

    </View>

    <View style={{
        backgroundColor : Colors.WHITE,
        height:'100%',
        padding : 20

    }}>

    <Text 
    style={{
         fontFamily: 'Outfit-bold',
         fontSize: 24, 
         textAlign: 'center'
 
        }}
    > Cookmate AI  / Find, Create & Enjoy Delicious Recipes</Text>

    <Text style = {{
        textAlign:'center',
        fontFamily: 'Outfit',
        fontSize:17,
        color: Colors.GRAY

            }}>
        Generate delicious recipes in seconds from here.
    </Text>    

    <TouchableOpacity style = {styles.button} 
          onPress = {() => console.log('Button Click')}>
      
        <Text style= {{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'Outfit',
            fontSize: 17
            
        }} >
            Get Started
        </Text>
    </TouchableOpacity>
    </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        borderRadius: 10,
    },

    imagecontainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },

    button:{
        backgroundColor: Colors.PRIMARY,
        padding : 10,
        borderRadius: 10,
        marginTop: 10

    }
})