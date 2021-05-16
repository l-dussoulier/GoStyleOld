import React from 'react'
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import {getAllDiscounts} from "../../API/data"
import DiscountItem from "./discountItem";
import axios from "axios";

class Discount extends React.Component {

    constructor(props) {
        super(props);
        this._tabDiscounts = []
    }

    _logOut() {
        console.log('deco');
        navigation.navigate('Login');
    }

    _loadDiscounts() {
        getAllDiscounts().then(data => {
            this._tabDiscounts = data
            this.forceUpdate()
        })
    }

    tqt = async () => {
        try {
            const response = await axios.get('http://192.168.0.13:8080/couponsUtilisateurs');
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    UNSAFE_componentWillMount() {
        console.log("bz ta mer")
    }

    render() {
        return (

            <View style={styles.view}>
                <Button
                    title="Test API"
                    onPress={() => this.tqt()}
                />
                <View style={styles.viewHeader}>
                    <Text style={styles.title}>Liste des réductions</Text>
                    <Button title="Déconnexion" onPress={() => this._logOut()}/>
                    <Button title="Charger codes" onPress={() => this._loadDiscounts()}/>
                </View>
                <FlatList
                    data={this._tabDiscounts}
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
