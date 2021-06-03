import React from 'react'
import Navigations from './navigations/navigations';
import {LogBox} from 'react-native'

LogBox.ignoreAllLogs()

export default function App() {
  return (
    //que devuelva el componente principal
    <Navigations/>
  );
}
