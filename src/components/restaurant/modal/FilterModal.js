import React, {useContext, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toggle from 'react-native-toggle-element';

import {Colors} from '../../../assets/Colors';
import {TextStyle} from '../../../assets/GlobalStyle';
import {FilterItemArray} from '../../../assets/StaticsArray';
import {Strings} from '../../../assets/Strings';
import {Button} from '../../common/Button';
import AppContext from '../../../context';

export const FilterModal = (Props) => {
  const {setFilterSelected,filterSelected} = useContext(AppContext);
  const [filteredArray, setFilteredArray] = useState( filterSelected === null ?[]:filterSelected);

  function _toggleSwitch(item) {
    const index = filteredArray.findIndex(value => value.id === item.id);
    const mainArray = filteredArray;
    if (index !== -1) {
      delete mainArray[index];
    } else {
      mainArray.push(item);
    }
    setFilteredArray(mainArray.filter(value => value !== undefined));
  }

  function _renderItem(item) {
    const isEnabled =
      filteredArray.findIndex(value => value.id === item.id) !== -1;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row-reverse',
          paddingVertical: responsiveWidth(2),
        }}>
        <Text style={[TextStyle.largeThinFont]}>{item.title}</Text>
        <Toggle
          value={isEnabled}
          onPress={() => _toggleSwitch(item)}
          thumbInActiveComponent={
            <Icon
              name={'close'}
              size={responsiveFontSize(4)}
              color={Colors.lightGrayBack}
            />
          }
          thumbActiveComponent={
            <Icon
              name={'check'}
              size={responsiveFontSize(4)}
              color={Colors.green}
            />
          }
          trackBar={{
            activeBackgroundColor: Colors.green,
            inActiveBackgroundColor: Colors.lightGrayBack,
            borderActiveColor: '#86c3d7',
            borderInActiveColor: '#1c1c1c',
            borderWidth: responsiveWidth(0.5),
            borderActiveColor: Colors.green,
            borderInActiveColor: Colors.lightGrayBack,
            width: responsiveWidth(15),
            height: responsiveWidth(10),
          }}
          thumbButton={{
            width: responsiveWidth(10),
            height: responsiveWidth(10),
            radius: responsiveWidth(5),
            activeBackgroundColor: Colors.white,
            inActiveBackgroundColor: Colors.white,
            borderInActiveColor: '#000',
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        padding: responsiveWidth(3),
      }}>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={[TextStyle.largeBlackFont]}>{Strings.filter}</Text>
        <TouchableOpacity>
          <Text style={[TextStyle.mediumThinFont, {color: Colors.green}]}>
            {Strings.removeFilters}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={FilterItemArray}
        renderItem={({item}) => _renderItem(item)}
        ItemSeparatorComponent={() => <View style={styles.line} />}
        ListFooterComponent={() => (
          <Button
            title={Strings.submit}
            onPress={() => [setFilterSelected(filteredArray), Props.onClose()]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: Colors.lightGrayOPC,
    height: responsiveWidth(0.3),
  },
});
