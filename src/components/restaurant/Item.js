import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'


import { Colors } from '../../assets/Colors'
import { Strings } from '../../assets/Strings'
import {Image} from './Image'
import { ConvertToFrNum } from '../../utils/NumConvertor'
import { CurveCard, TextStyle } from '../../assets/GlobalStyle'

export const Item = ({data})=> {
    return(
        <TouchableOpacity style={styles.mainContainer}>
        
        <View style={{flexDirection:'row-reverse', alignItems:'center'}}>
            <Image discount={data.discountValueForView} source={data.backgroundImage}/>
            <View style={{marginHorizontal:responsiveWidth(2), flex:1}}>
                <Text style={[TextStyle.largeBlackFont]}>{ConvertToFrNum( data.title)}</Text>
                <Text numberOfLines={1} style={[TextStyle.mediumThinFont,{color:Colors.lightGray}]}>{data.description}</Text>
                <Text style={[TextStyle.mediumThinFont,{color:Colors.lightGray}]}>{data.address?.toString().split('،')[0]}</Text>
            </View>
        </View>
        <View style={{flexDirection:'row-reverse',justifyContent:'space-between' }}>

            <View style={{flexDirection:'row-reverse', alignItems:'center'}}>
            <Icon name="truck-delivery-outline" size={responsiveFontSize(2)} color={Colors.lightGray} />
            <Text style={[TextStyle.smallThinFont,{color:Colors.lightGray}]}> {ConvertToFrNum(data.delivery_fee)} {Strings.toman}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={[TextStyle.mediumBlackFont,CurveCard,{backgroundColor:Colors.green, color:Colors.white, borderColor:Colors.green }]}>{ConvertToFrNum(Number(data.rating).toFixed(1))}</Text>
                <Text style={[TextStyle.smallThinFont,{color:Colors.lightGray, marginHorizontal:responsiveWidth(2)}]}>{`(${ ConvertToFrNum( data.commentCount)})`}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        marginHorizontal:responsiveWidth(4),
        marginVertical: responsiveWidth(2)
    },
    image:{
        width:responsiveWidth(20),
        height:responsiveWidth(20)
    }
})