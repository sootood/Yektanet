var alphabets = [
  'ا',
  'ب',
  'پ',
  'ت',
  'ث',
  'ج',
  'چ',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'ژ',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  'ظ',
  'ع',
  'غ',
  'ف',
  'ق',
  'ک',
  'گ',
  'ل',
  'م',
  'ن',
  'و',
  'ه',
  'ی',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export function OrderFunc(array, basedOn) {
  return array.sort(function (a, b) {
    return CharCompare(a[basedOn], b[basedOn], 0);
  });
}

function CharCompare(a, b, index) {
  let bChar, aChar;

  if (index == a.length || index == b.length) return 0;

  aChar = alphabets.indexOf(a.toUpperCase().charAt(index));
  bChar = alphabets.indexOf(b.toUpperCase().charAt(index));

  if (aChar != bChar) return aChar - bChar;
  else return CharCompare(a, b, index + 1);
}

export function CheckItem(item, checkValue) {
  switch (checkValue.propertyName) {
    case 'discountValueForView':
      return item['discountValueForView'] > 0;

    default:
      return item[checkValue.propertyName] === checkValue.propertyValue;
  }
}
