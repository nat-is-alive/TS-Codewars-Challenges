function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    let numberOfRepeats = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        numberOfRepeats++;
        if (numberOfRepeats > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

/*

DESCRIPTION:
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

*/
