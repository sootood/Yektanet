import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Colors } from '../../../assets/Colors'

export const ParentView = ({children, onClose})=>{
    return(
        <View style={{flex:1}}>
        <TouchableOpacity onPress={()=> onClose()} activeOpacity={1}  style={{backgroundColor:Colors.lightGrayBack, flex:0.7, }}/>
        <View style={{flex:1.2}}>
        {children}
        </View>
        </View>
    )
}