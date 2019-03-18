import React from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    AsyncStorage,
    TouchableWithoutFeedback,
    View,
    Dimensions,
    SafeAreaView
} from 'react-native';
import {NavigationActions} from 'react-navigation'

const {width, height} = Dimensions.get('window');
import {responsiveHeight, responsiveWidth, responsiveFontSize} from '../../Components/ResponsiveDimension';

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            setingImage: require('../../images/tabIcon/settings_inactive.png'),
            modalVisible: false,
            textColor: 'grey',

            ImagesBlue: [{
                Text: 'Home',
                showImage: require("../../Images/home_active.png"),
                hideImage: require("../../Images/home_unactive.png")
            },
                {
                    Text: 'TimeCard',
                    showImage: require("../../Images/payment_active.png"),
                    hideImage: require("../../Images/payment_unactive.png")
                },
                {
                    Text: 'Company',
                    showImage: require("../../Images/cart_active.png"),
                    hideImage: require("../../Images/cart_unactive.png")
                },
                {
                    Text: 'Document',
                    showImage: require("../../Images/status_active.png"),
                    hideImage: require("../../Images/status_unactive.png")
                },
                {
                    Text: 'Document',
                    showImage: require("../../Images/myaccount_active.png"),
                    hideImage: require("../../Images/myaccount_unactive.png")
                },
            ]
        }
    }

    gotoSettingsignature = () => {
        this.fun()

        this.props.navigation.navigate("drawSignature");
    }
    goToSettings = () => {
        this.fun()

        this.props.navigation.navigate("msetting");
    }
    goToContactUs = () => {

        this.fun()

        this.props.navigation.navigate("contactUs", {
            root: 'home'
        });
    }

    fun = () => {

        this.setState({
            hide: !this.state.hide
        }, () => {
            if (this.state.hide) {
                this.setState({
                    setingImage: require('../../images/tabIcon/settings_active.png'),
                    textColor: '#03599A'
                }, () => {
                    this.setModalVisible(true);
                })
            } else {
                this.setState({
                    setingImage: require('../../images/tabIcon/settings_inactive.png'),
                    textColor: 'grey'
                }, () => {
                    this.setModalVisible(false);
                })
            }
        })
    }

    LogOut = async () => {
        try {
            const loginstate = await AsyncStorage.getItem('loginstate')

            if (loginstate) {
                const x = await AsyncStorage.removeItem('loginstate');
                await Auth.signOut();
                console.log("XXX", x);
                this.setModalVisible(false);
                this.props.navigation.dispatch(
                    NavigationActions.reset({
                        key: null,
                        index: 0,
                        actions: [
                            NavigationActions.navigate({
                                routeName: 'login',
                            }),
                        ],
                    })
                )
            }


        } catch (error) {
            console.log('logout error', error);

        }

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    getDimention = () => {
        this.forceUpdate();
    }

    render() {
        const {
            navigation,
            renderIcon,
            activeTintColor,
            inactiveTintColor,
            jumpToIndex
        } = this.props;
        const {routes} = navigation.state;
        let currentIndex = navigation.state.index;
        let currentKey = navigation.state.routes[currentIndex].key

        return (

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={['portrait', 'landscape']}
                    visible={this.state.modalVisible}
                    onRequestClose={() => null

                    }>
                    <TouchableWithoutFeedback onPress={
                        this.fun
                    } style={{flex: 1}}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(154,154,154,0.0)',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end'
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                marginBottom: responsiveHeight(12),
                                marginLeft: '40%',
                                marginRight: '5%',
                                justifyContent: 'space-between',
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#EBEBEB'
                            }}>
                                <TouchableOpacity onPress={this.goToSettings}>
                                    <View style={{
                                        backgroundColor: '#ffffff',
                                        height: 25,
                                        width: '90%',
                                        margin: 2,
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{width: '20%', marginLeft: 3}}>
                                            <Image style={{}}
                                                   resizeMode="contain"
                                                   source={require('../../images/free/navigation/setting.png')}/>
                                        </View>
                                        <View style={{width: '80%'}}>
                                            <Text style={{color: '#8A8A8A'}}>
                                                {"Setting"}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.gotoSettingsignature}>
                                    <View style={{
                                        backgroundColor: '#ffffff',
                                        height: 25,
                                        width: '90%',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{width: '20%', marginLeft: 3}}>
                                            <Image style={{}}
                                                   resizeMode="contain"
                                                   source={require('../../images/free/navigation/signature.png')}/>
                                        </View>
                                        <View style={{width: '80%'}}>
                                            <Text style={{color: '#8A8A8A'}}>
                                                {"Signature Setting"}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.goToContactUs}>
                                    <View style={{
                                        backgroundColor: '#ffffff',
                                        height: 25,
                                        width: '90%',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{width: '20%', marginLeft: 3}}>
                                            <Image style={{}}
                                                   resizeMode="contain"
                                                   source={require('../../images/free/navigation/help.png')}/>
                                        </View>
                                        <View style={{width: '80%'}}>
                                            <Text style={{color: '#8A8A8A'}}>
                                                {"Help"}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.LogOut}>
                                    <View style={{
                                        backgroundColor: '#ffffff',
                                        height: 25,
                                        width: '90%',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{width: '20%', marginLeft: 3}}>
                                            <Image style={{height: 15, width: 15}}
                                                   resizeMode="contain"
                                                   source={require('../../images/free/navigation/logout.png')}/>
                                        </View>
                                        <View style={{width: '80%'}}>
                                            <Text style={{color: '#8A8A8A'}}>
                                                {"Logout"}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>


                </Modal>

                <View style={styles.tabbar}>
                    {routes && this.state.ImagesBlue.map((image, index) => {

                        const focused = index === navigation.state.index;
                        const tintColor = focused ? activeTintColor : inactiveTintColor;
                        {
                            console.log("routes", focused)
                        }
                        return (

                            <TouchableWithoutFeedback
                                key={index}
                                style={styles.tab}

                                onPress={() => {
                                    jumpToIndex(index)
                                }}
                            >
                                <View style={styles.tab}>
                                    {
                                        focused ?
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{height: responsiveHeight(5), width: responsiveWidth(6)}}
                                                    source={image.showImage}
                                                    resizeMode="contain"
                                                />
                                                <Text style={{
                                                    fontSize: Platform.OS === 'android' ? responsiveFontSize(2) : responsiveFontSize(2),
                                                    color: tintColor,
                                                    marginTop: 5,
                                                    alignSelf: 'center'
                                                }}>{image.Text}</Text>
                                            </View>
                                            :
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{height: responsiveHeight(5), width: responsiveWidth(6)}}
                                                    source={image.hideImage}
                                                    resizeMode="contain"
                                                />
                                                <Text style={{
                                                    fontSize: Platform.OS === 'android' ? responsiveFontSize(2) : responsiveFontSize(2),
                                                    color: tintColor,
                                                    marginTop: 5,
                                                    alignSelf: 'center'
                                                }}>{image.Text}</Text>
                                            </View>
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    })}

                    <TouchableWithoutFeedback onPress={
                        this.fun
                    }>
                        <View style={styles.tab}>
                            <Image
                                style={{height: responsiveHeight(5), width: responsiveWidth(6)}}
                                source={this.state.setingImage}
                                resizeMode="contain"
                            />
                            <Text style={{
                                color: this.state.textColor,
                                fontSize: responsiveFontSize(2),
                                marginTop: 5
                            }}>Settings</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    tabbar: {
        height: responsiveHeight(12),

        flexDirection: 'row',
        borderTopWidth: Platform.OS === 'android' ? .8 : 1,
        borderBottomColor: 'white',
        backgroundColor: 'white',
    },
    tabbarup: {
        height: 200,
        flexDirection: 'row',
        borderTopWidth: .8,
        // borderBottomColor: 'white',
    },
    tab: {
        alignSelf: 'center',
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:
        {
            tintColor: '#03599a',
            width: responsiveHeight(3),
            height: responsiveWidth(3)
        }
});

export default TabBarComponent;