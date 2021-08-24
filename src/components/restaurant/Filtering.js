import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Strings} from '../../assets/Strings';
import AppContext from '../../context';
import {Tag} from './Tag';

export const Filtering = Props => {
    
  const {catSelected, filterSelected} = useContext(AppContext);

  function _renderHeader() {
    return (
      <View style={{flexDirection: 'row-reverse'}}>
        <Tag
          item={catSelected !== null ? catSelected : {title: Strings.category}}
          icon={'border-all'}
          onPress={() => Props.onCatPress()}
          isSelected={catSelected !== null}
        />
        <Tag
          item={
            filterSelected !== null ? filterSelected : {title: Strings.filter}
          }
          icon={'filter'}
          onPress={() => Props.onFilterPress()}
          isSelected={filterSelected !== null}
        />
      </View>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={_renderHeader}
      style={{marginVertical: responsiveWidth(2)}}
      data={[{title: 'تخفیف دار'}, {title: 'امتیاز'}]}
      horizontal={true}
      inverted={true}
      renderItem={({item}) => <Tag item={item} isSelected={true} />}
    />
  );
};
