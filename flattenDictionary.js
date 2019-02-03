//Given a dictionary dict, write a function flattenDictionary
//that returns a flattened version of it .
function flattenDictionary(dict, obj = {}, key = '') {
  let keys = Object.keys(dict);
  for (let i = 0; i < keys.length; i++) {
    let outerKey = key + keys[i];
    if (typeof dict[keys[i]] === 'object') {
      let innerKey = '';
      if (outerKey === '') {
        innerKey = outerKey;
      } else {
        innerKey = outerKey + '.';
      }
      flattenDictionary(dict[keys[i]], obj, innerKey);
    } else {
      if (keys[i] === '' && outerKey[outerKey.length - 1] === '.') {
        outerKey = outerKey.slice(0, outerKey.length - 1);
      }
      obj[outerKey] = dict[keys[i]];
    }
  }
  return obj;
}

let dict = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: {
        '': '1'
      }
    }
  }
};

//expected output:

let expected = {
  Key1: '1',
  'Key2.a': '2',
  'Key2.b': '3',
  'Key2.c.d': '3',
  'Key2.c.e': '1'
};

console.log(flattenDictionary(dict));
