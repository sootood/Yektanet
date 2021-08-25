import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity,  ActivityIndicator} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../assets/Colors';
import { CurveCard, TextStyle } from '../../assets/GlobalStyle';


export const Button = (Props) => {
  return (
    <TouchableOpacity onPress={Props.onPress} style={[  styles.buttonContainer,Props.style]}>
      {Props.loading ? <ActivityIndicator color={'white'}/>:<Text style={[styles.textButton,{color:Colors.white },Props.txtStyle]}>{Props.title}</Text>}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  textButton: {
    ...TextStyle.mediumBlackFont,
    color: Colors.white,
    alignSelf: 'center',
    textAlignVertical:'center',
    textAlign:'center'
  },
  buttonContainer: {
    
    ...CurveCard,
    backgroundColor: Colors.pink,
    borderColor: Colors.pink,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   
    minHeight:responsiveHeight(7)
  },
 
  button: {
    height: responsiveHeight(10) , 
      width:responsiveWidth(85),
      ...CurveCard,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
