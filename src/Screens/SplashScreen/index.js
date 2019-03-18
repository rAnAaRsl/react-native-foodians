import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions,
    ActivityIndicator,
    Alert,
    Text,
    AsyncStorage,

} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.decisionToNavigate = this.decisionToNavigate.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.decisionToNavigate();
        }, 1000);
    }

    decisionToNavigate() {
        const {navigate} = this.props.navigation;
        AsyncStorage.getItem("userData").then((value) => {
            if (value) {
                let data = JSON.parse(value);
                console.log(data);
            }
            else {
                navigate("loginOption");
            }
        }).catch(function (err) {
            Alert.alert(err.toString())
        }).done();
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../Images/bg.png')}>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    gpsHeader: {
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: '900',
        fontSize: 18,
        fontFamily: 'Roboto',
    },

});
