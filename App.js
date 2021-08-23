
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from './src/assets/Colors';
import data from './src/assets/data.json'
import { Item } from './src/components';





const App = () => {
 
// console.warn(data)
  return (
    <SafeAreaView style={[{flex:1}]}>

    <FlatList
      data={data}
      renderItem={({item})=> <Item data = {item} />}
      ItemSeparatorComponent={()=> <View style={styles.line}/>}
    />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  line:{
    backgroundColor:Colors.lightGrayOPC,
    height:responsiveWidth(0.3)
  }
 
});

export default App;
