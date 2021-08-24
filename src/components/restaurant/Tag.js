import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {responsiveFontSize, responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../assets/Colors';
import {CurveCard, TextStyle} from '../../assets/GlobalStyle';

export const Tag = ({item, isSelected,...Props}) => {
  return (
    <TouchableOpacity
    onPress= {()=>Props.onPress(item)}
      style={[styles.tagContainer,{
        backgroundColor: isSelected ? Colors.green : Colors.white,
        borderColor: isSelected ? Colors.green : Colors.lightGrayOPC,
      }]}>
      {isSelected === true ? (
        <Icon
          name={'close-octagon-outline'}
          size={responsiveFontSize(2)}
          color={Colors.white}
        />
      ) : null}
      <Text
        style={[
          TextStyle.mediumThinFont,
          {color: isSelected ? Colors.white : Colors.green},
        ]}>
        {item.title}
      </Text>
      {Props.icon !== undefined ? <Icon
          name={Props.icon}
          size={responsiveFontSize(2)}
          color={Colors.green}
        /> :null}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    tagContainer:{
        ...CurveCard,
        flexDirection:'row',
        marginHorizontal:responsiveWidth(0.5),
        borderRadius:responsiveWidth(4),
        paddingVertical:responsiveWidth(1),
        alignItems:'center',
        paddingHorizontal:responsiveWidth(1.5)

    }
})
