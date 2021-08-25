import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Strings} from '../../assets/Strings';
import AppContext from '../../context';
import {Tag} from '../common/Tag';

export const Filtering = Props => {
  const {catSelected, filterSelected, setFilterSelected, setCatSelected} =
    useContext(AppContext);

  function _renderHeader() {
    return (
      <View style={{flexDirection: 'row-reverse'}}>
        <Tag
          item={catSelected !== null ? catSelected : {title: Strings.category}}
          icon={'border-all'}
          onPress={() => Props.onCatPress()}
          isSelected={catSelected !== null}
          deleteTag={() => setCatSelected(null)}
        />
        <Tag
          item={{title: Strings.filter}}
          icon={'filter'}
          onPress={() => Props.onFilterPress()}
          isSelected={filterSelected !== null}
          counter={filterSelected !== null ? filterSelected.length : 0}
          deleteTag={() => null}
        />
      </View>
    );
  }

  function _deleteFilterItem(item) {

    const index = filterSelected.findIndex(value => value.id === item.id);
    const mainArray = filterSelected;
    if (index !== -1) {
      delete mainArray[index];
    } else {
      mainArray.push(item);
    }
    const lastArray= mainArray.filter(value => value !== undefined)
    
    setFilterSelected(lastArray.length===0 ? null : lastArray);
  }

  return (
    <FlatList
      ListHeaderComponent={_renderHeader}
      style={{
        marginVertical: responsiveWidth(3),
        maxHeight: responsiveHeight(6),
        marginHorizontal: responsiveWidth(2),
      }}
      data={filterSelected}
      horizontal={true}
      inverted={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Tag
          item={item}
          onPress={() => null}
          isSelected={true}
          deleteTag={(item) => _deleteFilterItem(item)}
        />
      )}
    />
  );
};
