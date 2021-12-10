/*

* s, d, e = each one is a peg: source, destination and extra.
* n is the number of disks, initially starting n s
*/

let countStep = 0;

hanoi = function (s, d, e, n) {
  if (n <=0) {
    return;
  }

hanoi (s, e, d, n-1);
console.log(`Moving ${n} from ${s} to ${d}.` );
hanoi (e, d, s, n-1);
countStep++;
}

hanoi('s', 'd', 'e', 3);
console.log(`Steps taken: ${countStep}.`);
