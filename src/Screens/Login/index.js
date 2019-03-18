import React, {Component} from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class LoginOptions extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);

    }

    static navigationOptions = {
        header: null
    };


    handleSignUp = () => {
        const {navigate} = this.props.navigation;
        navigate("signUp");
    }
    handleLogIn = () => {
        const {navigate} = this.props.navigation;
        navigate("login");
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../Images/bg_white.png')}>
                <View
                    style={styles.passGroup}>
                    <Image
                        source={require('../../Images/logo.png')}
                        resizeMode={'cover'}
                        style={{
                            height: 150,
                            width: 150,
                            alignSelf: "center",
                        }}
                    />
                </View>
                <TouchableOpacity onPress={this.handleLogIn}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>

                <View style={{marginTop: 20}}>
                </View>

                <TouchableOpacity onPress={this.handleSignUp}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    passGroup: {
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        padding: 15,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: width - 40,
        marginLeft: 40,
        marginRight: 40,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F7941D',
        borderWidth: 1,
        borderColor: '#F7941D'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
    },
});

export default LoginOptions;