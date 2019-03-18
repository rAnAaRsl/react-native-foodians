import React, {Component} from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions,
    Text,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            password: '',
            isLoading: false
        }

    }

    static navigationOptions = {
        header: null
    };


    handleBackArrow = () => {
        this.props.navigation.goBack(null);
    }

    handleGuest = () => {

    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../Images/bg_white.png')}>
                <View style={styles.phoneHeader}>
                    <TouchableOpacity onPress={this.handleBackArrow} style={{marginLeft: 10, height: 20, width: 20}}>
                        <Image style={{height: 20, width: 20}} source={require('../../Images/back_arrow.png')}
                               resizeMode="cover"/>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.passGroup}>
                    <Image
                        source={require('../../Images/logo.png')}
                        resizeMode={'cover'}
                        style={{
                            height: 60,
                            width: 70,
                            alignSelf: "center",
                        }}
                    />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#F7941D', fontSize: 26, fontWeight: '600'}}>
                        {'SIGN IN'}
                    </Text>
                    <Text style={{fontSize:12,fontWeight:'600'}}>
                        {'The best food app in your town '}
                    </Text>
                </View>

                <View style={{height: 30}}>
                </View>

                <View
                    style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText=
                            {(text) => this.setState({number: text})}
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder="Enter Your Mobile Number"
                        placeholderTextColor="#000000"/>

                </View>

                <View
                    style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText=
                            {(text) => this.setState({password: text})}
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder="Enter Your Password"
                        placeholderTextColor="#000000"/>

                </View>

                <View style={styles.forgotContainer}>
                    <TouchableOpacity onPress={this.forgotPassword}>
                        <View style={styles.forgotView}>
                            <Text style={styles.forgotText}>Forgot Password ?</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={this.handleLogIn}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>
                <View style={{position: 'absolute', bottom: 0}}>
                    <TouchableOpacity onPress={this.handleGuest}>
                        <View style={styles.button1}>
                            <Text style={styles.buttonText1}>{'Continue as'} <Text
                                style={{color: '#B62C2C'}}>{'Guest ?'}</Text></Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
    inputGroup: {
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        width: width / 1.2,
        height: 50,
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#F7941D',
        marginBottom: 10
    },
    input: {
        width: '90%',
        height: 40,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        padding: 10,
        color: '#000000'
    },
    forgotContainer: {
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 30,
        marginBottom: 10
    },
    forgotView: {},
    forgotText: {
        color: '#000000',
        fontSize: 16
    },
    phoneHeader: {
        position: 'absolute',
        top: 30,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        flex: 1,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: height / 16,
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
    button1: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: width - 40,
        marginLeft: 40,
        marginRight: 40,
        height: 50,
    },
    buttonText1: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Roboto',
    },
});

export default HomeScreen;