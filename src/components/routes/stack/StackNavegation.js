import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Main, Login} from "../../../pages/Index";

const Stack = createStackNavigator();

export default function StackNavegation (){
    
    return (

        <Stack.Navigator 
            initialRouteName="login"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="main" component={Main}/>
            <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>

    );
}
