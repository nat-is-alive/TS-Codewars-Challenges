function switcher(x){
  let alphabet = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' '];

  let finalWord = "";

  for (let i = 0; i < x.length; i++) {
    finalWord = finalWord + alphabet[x[i] - 1];
  }

  return finalWord;

}

/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/
