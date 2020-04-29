const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, StyleSheet, Button } = require('react-native');

const HomeScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>Hello React Native Navigation 👋</Text>
            <Button
                title='Push Settings Screen'
                color='#710ce3'
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: 'Settings',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Settings'
                                }
                            }
                        }
                    }
                })} />
        </View>
    );
};
HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home',
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    }
}

const SettingsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Settings Screen</Text>
        </View>
    );
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);



Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: '#4d089a'
        },
        topBar: {
            title: {
                color: 'white'
            },
            backButton: {
                color: 'white'
            },
            background: {
                color: '#4d089a'
            }
        }
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
        }
    });
});

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});

