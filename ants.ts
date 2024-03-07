export function deadAntCount (ants:string | null) : number {
let deadAnts:number = 0;

 if (ants == null) {
   return deadAnts;
 }

 let newString = ants.replace(/ant/g, '');

 let numberOfA:number = 0;
 let numberOfN:number = 0;
 let numberOfT:number = 0;

 for (let i:number = 0; i < newString.length; i++) {

   switch(newString.charAt(i)) {
       case 'a':
       numberOfA++;
       break;
       case 'n':
       numberOfN++;
       break;
       case 't':
       numberOfT++;
       break;
   }


 }

 if (numberOfA >= numberOfN && numberOfA >= numberOfT) {
   deadAnts = numberOfA;
 }

 if (numberOfN >= numberOfA && numberOfN >= numberOfT) {
   deadAnts = numberOfN;
 }

 if (numberOfT >= numberOfN && numberOfT >= numberOfA) {
   deadAnts = numberOfT;
 }

 return deadAnts;
}

/*

An orderly trail of ants is marching across the park picnic area.

It looks something like this:

..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

The resulting carnage looks like this:

...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
Can you find how many ants have died?

Notes
When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads and 1 body = 2 dead ants, not 3

*/
