import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
export const CustomFontFamily = {
    black: 'IRANSansMobile_Bold',
    thin: 'IRANSansMobile',
}

export const TextStyle = {

    verySmallThinFont: {
        fontFamily: CustomFontFamily.thin,
        fontSize: responsiveFontSize(1.3)
    },
    smallBlackFont: {
        fontFamily: CustomFontFamily.black,
        fontSize: responsiveFontSize(1.5)
    },
    mediumBlackFont: {
        fontFamily: CustomFontFamily.black,
        fontSize: responsiveFontSize(1.8)
    },
    largeBlackFont: {
        fontFamily: CustomFontFamily.black,
        fontSize: responsiveFontSize(2)
    },
    smallThinFont: {
        fontFamily: CustomFontFamily.thin,
        fontSize: responsiveFontSize(1.5)
    },
    mediumThinFont: {
        fontFamily: CustomFontFamily.thin,
        fontSize: responsiveFontSize(1.8)
    },
    largeThinFont: {
        fontFamily: CustomFontFamily.thin,
        fontSize: responsiveFontSize(2)
    }
}
export const CurveCard={
    
        borderWidth: responsiveWidth(0.2),
        borderRadius: responsiveWidth(1.5),
        paddingHorizontal: responsiveWidth(1),
        // paddingVertical: responsiveHeight(1),
        elevation: 2,
        // shadowOffset: { width: 0, height: 20 },
        // shadowOpacity: 2,
        // shadowColor: '#000',
    
}