import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Main} from "../../../pages/Index";

const Stack = createStackNavigator();

export default function StackNavegation (){
    
    return (

        <Stack.Navigator 
            initialRouteName="main"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="main" component={Main}/>
        </Stack.Navigator>

    );
}
