export function catMouse(x: string, j: number): string {

  let catPos: number = x.indexOf('C');
  let mousePos: number = x.indexOf('m');
  let dogPos: number = x.indexOf('D');

  if (catPos == -1 || mousePos == -1 || dogPos == -1) {
    return 'boring without all three';
  };

  let distance: number = Math.abs(catPos - mousePos);

  if (distance > j) {
    return 'Escaped!';
  }

  let catOrMouseLeft:boolean = false;
  let catOrMouseRight:boolean = false;

  for (let i = dogPos; i > 0; i--) {
    if (x.charAt(i) == 'C' || x.charAt(i) == 'm') {
      catOrMouseLeft = true;
    }
  }

  for (let i = dogPos; i < x.length; i++) {
    if (x.charAt(i) == 'C' || x.charAt(i) == 'm') {
      catOrMouseRight = true;
    }
  }

  if (catOrMouseLeft && catOrMouseRight) {
    return 'Protected!';
  } else {
    return 'Caught!';
  }

  return '';
}

/*

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

So:

if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return 'boring without all three'

*/
