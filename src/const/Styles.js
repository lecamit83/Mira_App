
//import liraries
import React, { Component } from "react";
import { 
    StyleSheet, 
    Platform
} from "react-native";

import {BACKGROUND_COLOR_HEADER} from '../const/Const.js';

// define your styles
export const STYLES = StyleSheet.create({
    statusBar:{
        height: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: BACKGROUND_COLOR_HEADER,
    },
});