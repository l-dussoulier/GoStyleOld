import React from 'react'
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import discounts from "../../API/data"
import DiscountItem from "./discountItem";

class Discount extends React.Component {

    _logOut(){
        console.log('deco');
        navigation.navigate('Login');

    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.viewHeader}>
                    <Text style={styles.title}>Liste des réductions</Text>
                    <Button title="Déconnexion" onPress={() => this._logOut()}/>
                </View>
                <FlatList
                    data={discounts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <DiscountItem discount={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        marginTop: 10,
        flex: 1
    },
    viewHeader:{
        marginBottom: 15
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    button:{

    }
})

export default Discount
