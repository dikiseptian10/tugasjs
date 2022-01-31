function Comp(Huruf1, Huruf2) {
    if (Huruf1.length == Huruf2.length) {
        return true;
    }

    else {
        return false;
    }
}
console.log(Comp("AB", "CD"));
console.log(Comp("ABC", "DE"));
console.log(Comp("hello", "edabit"));