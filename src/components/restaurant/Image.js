import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '../../assets/Colors';
import {CurveCard, TextStyle} from '../../assets/GlobalStyle';
import {ConvertToFrNum} from '../../utils/NumConvertor';

export const Image = ({discount, source}) => {
  return (
    <View>
      {discount !== 0 ? (
        <Text style={[TextStyle.smallBlackFont, CurveCard, styles.label]}>
         % {ConvertToFrNum(discount)}{' '}
        </Text>
      ) : null}
      <FastImage
        source={{uri: source}}
        resizeMode={FastImage.resizeMode.cover}
        style={[CurveCard, styles.image]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderColor:'transparent'
  },
  label: {
    position: 'absolute',
    zIndex: 10,
    elevation: 3,
    top: responsiveWidth(3),
    end: responsiveWidth(-1),
    color: Colors.white,
    backgroundColor: Colors.pink,
    borderColor:Colors.pink
  },
});
