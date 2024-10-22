import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({name, description, picture, icon_name})=> {
    return (
        // Style is a way to change Font, change layout, similar to CSS, with different function names
        // Having Multiple View and Multiple Text can allow you to arrange layouts more
        <View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={icon_name} size={40} color="#000000" />

                <Text style={{fontWeight: 'bold', marginLeft: 10, textTransform: 'uppercase'}}>
                    {name}
                </Text>
            </View>
            <Text>{description}</Text>
            <Image source={picture} style={{width:400, height:500}} />

        </View>
    );};

const AllBoats = () => {
    return (
        <ScrollView>
            <Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" picture={require('../img/sea_ray.jpg')}/>
            <Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others" icon_name="sailboat" picture={require('../img/four_winns.jpg')}/>
            <Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="sailboat" picture={require('../img/flipper.jpg')}/>
            <Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." icon_name="sailboat" picture={require('../img/princess.jpg')}/>
            <Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="sailboat" picture={require('../img/bayliner.jpg')}/>
            <Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit" icon_name="sailboat" picture={require('../img/fairline.jpg')}/>
        </ScrollView>
    )

}

export default AllBoats;
