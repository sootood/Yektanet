import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../assets/Colors';
import {CurveCard, TextStyle} from '../../assets/GlobalStyle';
import {ConvertToFrNum} from '../../utils/NumConvertor';

export const Tag = ({item, isSelected, ...Props}) => {

  return (
    <TouchableOpacity
      onPress={() => Props.onPress(item)}
      style={[
        styles.tagContainer,
        {
          backgroundColor: isSelected ? Colors.green : Colors.white,
          borderColor: isSelected ? Colors.green : Colors.lightGrayOPC,
        },
      ]}>
      {isSelected === true && Props.counter === undefined ? (
        <TouchableOpacity onPress={() => Props.deleteTag(item)}>
          <Icon
            name={'close-octagon-outline'}
            size={responsiveFontSize(2)}
            color={Colors.white}
            style={{marginHorizontal: responsiveWidth(0.5)}}
          />
        </TouchableOpacity>
      ) : Props.counter !== 0 &&  Props.counter !== undefined  ? (
        <Text
          style={[
            TextStyle.smallThinFont,
            {
              color: Colors.white,
              marginHorizontal: responsiveWidth(1),
              backgroundColor: Colors.darkGreen,
              ...CurveCard,
              borderRadius: responsiveWidth(5),
              borderColor: Colors.darkGreen,
              paddingHorizontal: responsiveWidth(2),
              textAlign: 'center',
            },
          ]}>
          { ConvertToFrNum(Props.counter)}
        </Text>
      ) : null}
      <Text
        style={[
          TextStyle.mediumThinFont,
          {color: isSelected ? Colors.white : Colors.green, marginHorizontal:responsiveWidth(0.5),textAlignVertical:'center', textAlign:'center'},
        ]}>
        {item.title}
      </Text>
      {Props.icon !== undefined ? (
        <Icon
          name={Props.icon}
          size={responsiveFontSize(2)}
          color={isSelected ? Colors.white : Colors.green}
        />
      ) : null}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tagContainer: {
    ...CurveCard,
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(1),
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveWidth(1),
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1.5),
    maxHeight: responsiveHeight(5),
    alignContent:'center',
  },
});
