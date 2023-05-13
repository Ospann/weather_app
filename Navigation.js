import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/Map';
import SearchScreen from './screens/Find';
import Weather from './screens/Weather';
import MobileBar from './components/MobileBar';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{
                        title: 'Recycling place',
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        title: 'Pollution index',
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Weather"
                    component={Weather}
                    options={{
                        title: 'Oxygen Forecast',
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
            <MobileBar />
        </NavigationContainer>
    );
};

export default Navigation;
