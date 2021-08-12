import { StatusBar } from 'expo-status-bar';
import React from 'react';


//Import Components
import Route from "./src/components/routes/Route";

export default function App() {
  return (
    <>
      <Route />
      <StatusBar style="auto" />
    </>
  );
}
