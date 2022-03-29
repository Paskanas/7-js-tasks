console.log('Kintamuju iniciavimas')
console.log('1 uzduotis:')
const num1 = 1
console.log(num1)
const num2 = 2
console.log(num2)
const num3 = 3
console.log(num3)
console.log('-------------------------------------')
console.log('2 uzduotis:')
const str1 = 'Pirmas'
console.log(str1)
const str2 = 'Antras'
console.log(str2)
const str3 = 'Trecias'
console.log(str3)
console.log('-------------------------------------')
console.log('3 uzduotis:')
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
const arr2 = [6, 7, 8, 9, 10]
console.log(arr2)
const arr3 = [11, 12, 13, 14, 15]
console.log(arr3)
console.log('-------------------------------------')
console.log('4 uzduotis:')
const arrStr1 = ['Vienas', 'du', 'trys', 'keturi', 'penki']
console.log(arrStr1)
const arrStr2 = ['a', 'b', 'c', 'd', 'e']
console.log(arrStr2)
const arrStr3 = ['1', '2', '3', '4', '5']
console.log(arrStr3)
console.log('-------------------------------------')
console.log('-------------------------------------')
console.log('Veiksmai su kintamaisiais')
console.log('1 uzduotis:')
const numbersSum = num1 + num2 + num3
console.log('num1 + num2 + num3 = ', numbersSum)
console.log('-------------------------------------')
console.log('2 uzduotis:')
const concatStrings = str1 + ' ' + str2 + ' ' + str3
console.log(concatStrings)
console.log('-------------------------------------')
console.log('3 uzduotis:')
console.log(
  arr1[0] +
    ' - ' +
    arr1[1] +
    ' + ' +
    arr1[2] +
    ' - ' +
    arr1[3] +
    ' + ' +
    arr1[4]
)
const calculateArr1 = arr1[0] - arr1[1] + arr1[2] - arr1[3] + arr1[4]
console.log(calculateArr1)
console.log(
  arr2[0] +
    ' - ' +
    arr2[1] +
    ' + ' +
    arr2[2] +
    ' - ' +
    arr2[3] +
    ' + ' +
    arr2[4]
)
const calculateArr2 = arr2[0] - arr2[1] + arr2[2] - arr2[3] + arr2[4]
console.log(calculateArr2)
console.log(
  arr3[0] +
    ' - ' +
    arr3[1] +
    ' + ' +
    arr3[2] +
    ' - ' +
    arr3[3] +
    ' + ' +
    arr3[4]
)
const calculateArr3 = arr3[0] - arr3[1] + arr3[2] - arr3[3] + arr3[4]
console.log(calculateArr3)
console.log('-------------------------------------')
console.log('4 uzduotis:')
let concatArrStr1 = ''
for (let i = 0; i < 5; i++) {
  if (concatArrStr1) {
    concatArrStr1 = concatArrStr1 + ', ' + arrStr1[i]
  } else {
    concatArrStr1 = arrStr1[i]
  }
}
console.log(concatArrStr1)

let concatArrStr2 = ''
for (let i = 0; i < 5; i++) {
  if (concatArrStr2) {
    concatArrStr2 = concatArrStr2 + ', ' + arrStr2[i]
  } else {
    concatArrStr2 = arrStr2[i]
  }
}
console.log(concatArrStr2)

let concatArrStr3 = ''
for (let i = 0; i < 5; i++) {
  if (concatArrStr3) {
    concatArrStr3 = concatArrStr3 + ', ' + arrStr3[i]
  } else {
    concatArrStr3 = arrStr3[i]
  }
}
console.log(concatArrStr3)
console.log('-------------------------------------')
console.log('-------------------------------------')
console.log('Kintamuju palyginimas')
console.log('1 uzduotis:')
console.log('Skaiciai: num1=' + num1 + ', num2=' + num2)
console.log('a: num1>num2')
if (num1 > num2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('b: num1<num2')
if (num1 < num2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('c: num1=num2')
if (num1 === num2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('d: num1<>num2')
if (num1 != num2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('e: num1>=num2')
if (num1 >= num2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('f: num1<=num2')
if (num1 <= num2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('-------------------------------------')
console.log('2 uzduotis:')
const str1Length = str1.length
console.log("Zodzio '" + str1 + "' raidziu kiekis = " + str1Length)
const str2Length = str2.length
console.log("Zodzio '" + str2 + "' raidziu kiekis = " + str2Length)
const str3Length = str3.length
console.log("Zodzio '" + str3 + "' raidziu kiekis = " + str3Length)
console.log('-------------------------------------')
console.log('3 uzduotis:')
console.log("Zodziai: '" + str1 + "' ir '" + str2 + "'")
console.log('a: str1>str2')
if (str1 > str2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('b: str1Length<str2Length')
if (str1Length < str2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('c: str1Length=str2Length')
if (str1Length === str2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('d: str1Length<>str2Length')
if (str1Length != str2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('e: str1Length>=str2Length')
if (str1Length >= str2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('f: str1Length<=str2Length')
if (str1Length <= str2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('-------------------------------------')
console.log('4 uzduotis:')
const arr1Length = arr1.length
console.log("Saraso '" + arr1 + "' kintamuju ilgis = " + arr1Length)
const arr2Length = arr2.length
console.log("Saraso '" + arr2 + "' kintamuju ilgis = " + arr2Length)
const arr3Length = arr3.length
console.log("Saraso '" + arr3 + "' kintamuju ilgis = " + arr3Length)
console.log('-------------------------------------')
console.log('5 uzduotis:')
console.log("Sarasai: '" + arr1 + "' ir '" + arr2 + "'")
console.log('a: arr1>arr2')
if (arr1 > arr2) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('b: arr1Length<arr2Length')
if (arr1Length < arr2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('c: arr1Length=arr2Length')
if (arr1Length === arr2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('d: arr1Length<>arr2Length')
if (arr1Length != arr2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('e: arr1Length>=arr2Length')
if (arr1Length >= arr2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('f: arr1Length<=arr2Length')
if (arr1Length <= arr2Length) {
  console.log('Pomidoras')
} else {
  console.log('Bandykite dar karta')
}
console.log('-------------------------------------')
console.log('-------------------------------------')
console.log('Ciklo for panaudojimas')
console.log('Uzduotis 1')
console.log('a:')
let for1Sum = 0
for (let i = 0; i <= 0; i++) {
  for1Sum = for1Sum + i
}
console.log(for1Sum)
console.log('-------------------------------------')
console.log('b:')
let for2Sum = 0
for (let i = 0; i <= 4; i++) {
  for2Sum = for2Sum + i
}
console.log(for2Sum)
console.log('-------------------------------------')
console.log('c:')
let for3Sum = 0
for (let i = 0; i <= 100; i++) {
  for3Sum = for3Sum + i
}
console.log(for3Sum)
console.log('-------------------------------------')
console.log('d:')
let for4Sum = 0
for (let i = 574; i <= 815; i++) {
  for4Sum = for4Sum + i
}
console.log(for4Sum)
console.log('-------------------------------------')
console.log('e:')
let for5Sum = 0
for (let i = -50; i <= 50; i++) {
  for5Sum = for5Sum + i
}
console.log(for5Sum)
console.log('-------------------------------------')
console.log('e:')
let for6Sum = 0
for (let i = -70; i <= 30; i++) {
  for6Sum = for6Sum + i
}
console.log(for6Sum)
console.log('-------------------------------------')
console.log('Uzduotis 2')
let backwardsStr1 = ''
for (i = str1Length; i >= 0; i--) {
  backwardsStr1 = backwardsStr1 + str1.charAt(i)
}
console.log(backwardsStr1)
console.log('-------------------------------------')
let backwardsStr2 = ''
for (i = str2Length; i >= 0; i--) {
  backwardsStr2 = backwardsStr2 + str2.charAt(i)
}
console.log(backwardsStr2)
console.log('-------------------------------------')
console.log('-------------------------------------')
let backwardsStr3 = ''
for (i = str3Length; i >= 0; i--) {
  backwardsStr3 = backwardsStr3 + str3.charAt(i)
}
console.log(backwardsStr3)
console.log('-------------------------------------')
console.log('Uzduotis 3')
console.log('a:')
for (a = 3; a <= 7; a += 2) {
  console.log('Be liekanos: ' + a)
  for (i = 0; i <= 11; i++) {
    if (i % a === 0) {
      console.log(i)
    }
  }
}
console.log('b:')
console.log('-------------------------------------')
for (a = 3; a <= 7; a += 2) {
  console.log('Be liekanos: ' + a)
  for (i = 8; i <= 31; i++) {
    if (i % a === 0) {
      console.log(i)
    }
  }
}
console.log('c:')
console.log('-------------------------------------')
for (a = 3; a <= 7; a += 2) {
  console.log('Be liekanos: ' + a)
  for (i = -18; i <= 18; i++) {
    if (i % a === 0) {
      console.log(i)
    }
  }
}
console.log('d:')
console.log('i:')
const first = 0
const last = 11
let count = 0
for (a = 3; a <= 7; a += 2) {
  console.log('Be liekanos: ' + a)
  count = 0
  for (i = first; i <= last; i++) {
    if (i % a === 0) {
      count = count + 1
    }
  }
  console.log(
    'Skaičių intervale tarp ' +
      first +
      ' ir ' +
      last +
      ', besidalijančių be liekanos iš ' +
      a +
      ' yra ' +
      count +
      ' vienetai.'
  )
}
