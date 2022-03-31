console.log('Uzduotis: 1');
const tusciaFunkcija = () => {
  return false;
};

console.log(tusciaFunkcija());
console.log('Uzduotis: 2');
let multiplication;
const daugyba = (nr1, nr2) => {
  return nr1 * nr2;
};
multiplication = daugyba(5, 2);
console.log('Sandauga:', multiplication);
console.log('Uzduotis: 3');
const skaitmenuKiekisSkaiciuje = (a) => {
  let lReturn;
  if (typeof a !== 'number' || isNaN(a)) {
    lReturn = 'Pateikta netinkamo tipo reikšmė';
  } else {
    lReturn = a.toString().length;
  }
  return lReturn;
};
console.log(skaitmenuKiekisSkaiciuje(true));
console.log('Uzduotis: 4');
function didziausiasSkaiciusSarase(a) {
  let lReturn;
  if (Array.isArray(a)) {
    if (a.length === 0) {
      lReturn = 'Pateikas sarašas negali būti tuščias';
    } else {
      lReturn = 0;
      for (i = 0; i < a.length; i++) {
        if (a[i] > lReturn) {
          lReturn = a[i];
        }
      }
    }
  } else {
    lReturn = 'Pateika netinkamo tipo reikšmė';
  }
  return lReturn;
}
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log('Uzduotis: 5');
function isrinktiRaides(text, nth) {
  let lResult = '';
  if (typeof text !== 'string') {
    lResult = 'Pirmasis kintamasis yra netinkamo tipo.';
  } else if (text === '' || text.length > 100) {
    lResult = 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
  } else if (typeof nth !== 'number') {
    lResult = 'Antrasis kintamasis yra netinkamo tipo.';
  } else if (nth <= 0) {
    lResult = 'Antrasis kintamasis turi būti didesnis už nulį.';
  } else if (text.length < nth) {
    lResult =
      'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
  } else {
    for (i = nth - 1; i < text.length; i += nth) {
      lResult += text[i];
    }
  }
  return lResult;
}
console.log(isrinktiRaides(1561, 2));
console.log('Uzduotis: 6');
function dalyba(a, b) {
  let lReturn = '';
  if (typeof a !== 'number' || isNaN(a)) {
    lReturn = 'Pirmasis skaicius netinkamo tipo';
  } else if (typeof b !== 'number' || isNaN(b)) {
    lReturn = 'Antrasis skaicius netinkamo tipo';
  } else if (b === 0) {
    lReturn = 'Dalyba is 0 negalima';
  } else {
    lReturn = a / b;
  }
  return lReturn;
}

console.log(dalyba(1, 2));
console.log(dalyba('1', 2));
console.log(dalyba(1, '2'));
console.log(dalyba(true, '2'));
console.log(dalyba(NaN, '2'));
console.log(dalyba(Infinity, 2));
console.log(dalyba(Infinity, 0));
console.log(dalyba(10, -5));
console.log(dalyba(-10, -5));
