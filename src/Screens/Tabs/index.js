import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Home from './Home/index';
import TabBarComponent from './tabs';

const Tabs = TabNavigator({
        Home: {
            screen: Home
        },
    }
    , {
        tabBarComponent: TabBarComponent,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        lazy: true,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#03599A',
            inactiveTintColor: '#ACACAC',
            activeBackgroundColor: "#fff",
            inactiveBackgroundColor: "#fff",
            showIcon: true,
            showLabel: false,

        },
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

            },
        })

    });

export default Tabs;
