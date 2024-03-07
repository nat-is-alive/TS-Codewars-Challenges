export function countSmileys(arr: string[]): number {

  let numberOfSmileys:number = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].charAt(0) === ":" || arr[i].charAt(0) === ";") { // if it has eyes then check the next character

      switch (arr[i].charAt(1)) {
          case ")":
          numberOfSmileys += 1;
          break;

          case "D":
          numberOfSmileys += 1;
          break;

          case "-": // if it has a nose check the next

          if (arr[i].charAt(2) === ")") {
            numberOfSmileys += 1;
          } else if (arr[i].charAt(2) === "D") {
            numberOfSmileys += 1;
          }
          break;

          case "~": // if it has a nose check the next

          if (arr[i].charAt(2) === ")") {
            numberOfSmileys += 1;
          } else if (arr[i].charAt(2) === "D") {
            numberOfSmileys += 1;
          }

          break;

      }

    }

  }

  return numberOfSmileys //return the total number of smiling faces in the array
}

/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/
