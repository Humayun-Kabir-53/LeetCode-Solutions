var isValid = function(s) {
    if ( s.length === 0 || s.length%2 !== 0 ) return false;
    let stack = [];
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    // loop through each element of s
    for ( let c of s ) {
        if ( s.length === 0 || s.length %2 !== 0 ) return false;
        if ( c === "(" || c === "{" || c === "[" ) {
            stack.push(c); // storing opening brackets
        }
        else {
            //let topStack = stack.pop();
            if( c !== map[stack.pop()] ) return false;
        }
    }

    return !stack.length;
};
