import React,{useState,useEffect, useContext} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../../assets/Colors';
import {TextStyle} from '../../../assets/GlobalStyle';
import {Strings} from '../../../assets/Strings';
import categories from '../../../assets/categories.json';
import FastImage from 'react-native-fast-image';
import AppContext from '../../../context';

export const CatModal = ({onClose}) => {

    const [sub, setSub] = useState(null)
    const [subArray, setSubArray] = useState(null)
    const {setCatSelected} = useContext(AppContext)
    
    

    function _onPressItem(item) {
        
        if (item.sub!== undefined ) {
            setSubArray(item.sub)
        }else{
            onClose()
            setCatSelected(item)

        }
        setSub(item)

    }

  function _renderItem(item) {
    return (
      <TouchableOpacity onPress={()=>  _onPressItem(item)} style={styles.itemContainer}>
        <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
          <FastImage
            source={{uri: item.image}}
            style={styles.image}
          />
          <Text
            style={[
              TextStyle.mediumThinFont,
              {marginHorizontal: responsiveWidth(2)},
            ]}>
            {item.title}
          </Text>
        </View>
        {item.sub !== undefined ? (
          <Icon
            size={responsiveFontSize(3)}
            color={Colors.lightGray}
            name={'chevron-left'}
          />
        ) : null}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
        padding: responsiveWidth(5),
      }}>
      <Text style={[TextStyle.mediumThinFont]}>{Strings.chooseCategory}</Text>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignSelf: 'flex-end',
          marginVertical: responsiveWidth(2),
          alignItems:'center'
        }}>
        <Icon
          name={'border-all'}
          size={responsiveFontSize(2)}
          color={Colors.green}
        />
        <Text style={[TextStyle.mediumThinFont,{marginHorizontal:responsiveWidth(1), color:Colors.green}]}>{sub !== null ? sub.title: Strings.category}</Text>
      </View>
      <FlatList
        data={subArray !== null ?  subArray :categories}
        renderItem={({item}) => _renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveWidth(2),
    borderTopColor: Colors.lightGrayOPC,
    borderTopWidth: responsiveWidth(0.3),
  },
  image:{
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    borderWidth: 2,
    borderColor: 'transparent',
  }
});
