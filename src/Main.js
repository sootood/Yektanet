import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './assets/Colors';
import data from './assets/data.json';
import {TextStyle} from './assets/GlobalStyle';
import {Strings} from './assets/Strings';
import {
  CatModal,
  Filtering,
  Item,
  FilterModal,
  ParentView,
  SortModal,
} from './components';
import AppContext from './context';
import {OrderFunc} from './utils/GlobalFunction';
import {ConvertToFrNum} from './utils/NumConvertor';

const Main = () => {
  const [array, setArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [modalType, setModalType] = useState(-1);
  const {catSelected, filterSelected, sorting} = useContext(AppContext);

  useEffect(() => {
    const sortedList = OrderFunc(data, 'title');
    setArray(sortedList);
  }, []);

  useEffect(() => {
    if (catSelected !== null) {
      const mainArray = filterSelected !== null ? filteredArray : array;

      const filteredList = mainArray.filter(
        item => item.category === catSelected?.value,
      );
      setFilteredArray(filteredList);
    }

    if (sorting) {
      const mainArray =
        filterSelected !== null || catSelected !== null ? filteredArray : array;
      const sortingArray = mainArray.sort((a, b) => b.rating - a.rating);
      setFilteredArray(sortingArray);
    }
  }, [catSelected, filterSelected, sorting]);

  useEffect(() => {
    if (filterSelected !== null) {
      const mainArray =
        filterSelected !== null && catSelected !== null ? filteredArray : array;
      const filteredList = mainArray.filter(item => _filterFunc(item));
      setFilteredArray(filteredList);
    }
  }, [catSelected, filterSelected]);

  function _checkItem(item, checkValue) {
    switch (checkValue.propertyName) {
      case 'discountValueForView':
        return item['discountValueForView'] > 0;

      default:
        return item[checkValue.propertyName] === checkValue.propertyValue;
    }
  }

  function _filterFunc(item) {
    const result = [];
    for (let filterItem of filterSelected) {
      result.push(_checkItem(item, filterItem));
    }

    if (result.findIndex(item => item === false) === -1) {
      return item;
    }
  }

  function _renderHeader() {
    const dataList =
      catSelected !== null || filterSelected !== null ? filteredArray : array;
    const openRes = dataList?.filter(item => item.is_open === true);
    return (
      <View style={styles.headerContainer}>
        <Text style={[TextStyle.largeBlackFont]}>
          {ConvertToFrNum(openRes?.length)} {Strings.isOpenText}
        </Text>
        <TouchableOpacity
          onPress={() => setModalType(3)}
          style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
          <Icon
            name={'sort'}
            size={responsiveFontSize(4)}
            color={Colors.green}
            style={{marginHorizontal: responsiveWidth(2)}}
          />
          <Text style={[TextStyle.mediumBlackFont, {color: Colors.green}]}>
            {sorting ? Strings.highScore : Strings.sorting}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <Modal
        visible={modalType !== -1}
        onRequestClose={() => setModalType(-1)}
        transparent={true}
        animationType={'slide'}>
        <ParentView onClose={() => setModalType(-1)}>
          {modalType === 1 ? (
            <CatModal onClose={() => setModalType(-1)} />
          ) : modalType === 2 ? (
            <FilterModal onClose={() => setModalType(-1)} />
          ) : (
            <SortModal onClose={() => setModalType(-1)} />
          )}
        </ParentView>
      </Modal>
      <Filtering
        onCatPress={() => setModalType(1)}
        onFilterPress={() => setModalType(2)}
      />
      <FlatList
        ListHeaderComponent={_renderHeader}
        data={
          catSelected !== null || filterSelected !== null
            ? filteredArray
            : array
        }
        renderItem={({item}) => <Item data={item} />}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: Colors.lightGrayOPC,
    height: responsiveWidth(1),
  },
  headerContainer: {
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginVertical: responsiveWidth(2),
    borderBottomColor: Colors.lightGrayOPC,
    borderBottomWidth: responsiveWidth(1),
  },
});

export default Main;
