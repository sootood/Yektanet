//This function is for converting english numbers to persian
//This is for numerical data that come from web services and are english numbers

export const ConvertToFrNum = a => {

    if (typeof a === 'number') {
        a = a.toString()
    }
    return a.replace(/\d+/g, function(digit) {

        var enDigitArr = [];
        var peDigitArr = [];

        for (let i = 0; i < digit.length; i++) {

            enDigitArr.push(digit.charCodeAt(i))
        }

        for (let j = 0; j < enDigitArr.length; j++) {

            peDigitArr.push(
                String.fromCharCode(enDigitArr[j] + (!!a && a === true ? 1584 : 1728))
            )
        }
        return peDigitArr.join('')
    })
};

//This function converts persian numbers to english
//This is for api inputs that gives error when you give persian numbers to them as an input

var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

export const ConvertToEnNum = a => {
    if (typeof a === 'number') {
        a = a.toString()
    }
    for (var i = 0; i < 10; i++) {
        a = a.replace(persianNumbers[i], i).replace(persianNumbers[i], i);
    }

    return a;
};
