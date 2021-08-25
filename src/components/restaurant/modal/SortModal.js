import React, {useContext} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../../assets/Colors';
import {TextStyle} from '../../../assets/GlobalStyle';
import {Strings} from '../../../assets/Strings';
import AppContext from '../../../context';

export const SortModal = ({onClose}) => {
  const {sorting,setSorting} = useContext(AppContext);
  return (
    <View style={styles.mainCn}>
      <View style={styles.headerCn}>
        <Text style={[TextStyle.largeBlackFont]}>{Strings.sorting}</Text>
        <TouchableOpacity onPress={() => onClose()}>
          <Icon
            name={'close-octagon-outline'}
            size={responsiveFontSize(3)}
            color={Colors.black}
            style={{marginHorizontal: responsiveWidth(0.5)}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.itemCn}
        onPress={() => [setSorting(!sorting), onClose()]}>
         {sorting ?<Icon
            name={'check'}
            size={responsiveFontSize(2)}
            color={Colors.green}
            style={{marginHorizontal: responsiveWidth(0.5)}}
          />: null}
        <Text style={[TextStyle.mediumThinFont]}>{Strings.highScore}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCn: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainCn: {
    flex: 1,
    padding: responsiveWidth(3),
    backgroundColor: Colors.white,
  },
  itemCn: {
    paddingVertical: responsiveWidth(3),
    borderBottomColor: Colors.lightGrayBack,
    borderBottomWidth: responsiveWidth(0.2),
    flexDirection:'row-reverse',
    alignItems:'center'
  },
});
