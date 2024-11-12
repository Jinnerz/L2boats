import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles  = StyleSheet.create({
    Parent: {
        marginTop: 50,
        backgroundColor: 'blue',
        paddingHorizontal: 10
    },
    Child: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
        marginBottom: 10,

    },
    BoatName: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
        textTransform: 'uppercase',
        backgroundColor: 'darkblue',
    },
    Image: {
        width: 370,
        height: 400,
        marginTop: 5,
    },
    Title: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    Description: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10
    }
})

const Boat = ({name, description, picture, icon_name})=> {
    return (
        // Style is a way to change Font, change layout, similar to CSS, with different function names
        // Having Multiple View and Multiple Text can allow you to arrange layouts more
        <View style={styles.Child}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={icon_name} size={30} color="#FFFFFF" />

                <Text style={styles.BoatName}>
                    {name}
                </Text>
            </View>

            <Image source={picture} style={styles.Image} />
            <Text style={styles.Description}>{description}</Text>

        </View>
    );};

const AllBoats = () => {
    return (
        <ScrollView>
            <View style={styles.Parent}>
                <Text style={styles.Title}>Boat Rental Platform</Text>
                <Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" picture={require('../img/sea_ray.jpg')}/>
                <Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others" icon_name="sailboat" picture={require('../img/four_winns.jpg')}/>
                <Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="sailboat" picture={require('../img/flipper.jpg')}/>
                <Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." icon_name="sailboat" picture={require('../img/princess.jpg')}/>
                <Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="sailboat" picture={require('../img/bayliner.jpg')}/>
                <Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit" icon_name="sailboat" picture={require('../img/fairline.jpg')}/>
            </View>
        </ScrollView>
    )

}

export default AllBoats;
