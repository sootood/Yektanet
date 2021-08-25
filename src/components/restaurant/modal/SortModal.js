import React,{useContext} from 'react';
import {TouchableOpacity, View, StyleSheet,Text} from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../assets/Colors';
import { TextStyle } from '../../../assets/GlobalStyle';
import { Strings } from '../../../assets/Strings';
import AppContext from '../../../context';

export const SortModal = ({ onClose}) => {

    const { setSorting} = useContext(AppContext)
  return (
    <View style={{
        flex: 1,
        padding: responsiveWidth(3),
        backgroundColor:Colors.white
      }}>
     <View style={{flexDirection:'row-reverse', justifyContent:'space-between', alignItems:'center'}}>
         <Text style={[TextStyle.largeBlackFont]}>{Strings.sorting}</Text>
         <TouchableOpacity>
         <Icon
            name={'close-octagon-outline'}
            size={responsiveFontSize(3)}
            color={Colors.black}
            style={{marginHorizontal: responsiveWidth(0.5)}}
          />
    </TouchableOpacity>
     </View>
     <TouchableOpacity  style={{paddingVertical:responsiveWidth(3), borderBottomColor :Colors.lightGrayBack, borderBottomWidth:responsiveWidth(0.2)}} 
     onPress={()=>[setSorting(true), onClose()]}>
         <Text style={[TextStyle.mediumThinFont]}>{Strings.highScore}</Text>
     </TouchableOpacity>

    </View>
  );
};


