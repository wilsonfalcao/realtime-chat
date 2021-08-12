import React from "react";
import { NavigationContainer } from '@react-navigation/native';


//Navegation
import StackNavegation from "./stack/StackNavegation";

export default function Route() {

  return (
    <NavigationContainer>
        <StackNavegation />
    </NavigationContainer>
  );
}