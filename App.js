import { StatusBar } from 'expo-status-bar';
import React from 'react';


//Import Components
import Route from "./src/components/routes/Route";

//Import Reducer Store
import { Store } from "./src/store/";

export default function App() {
  return (
    <Store>
      <Route />
      <StatusBar style="auto" />
    </Store>
  );
}
