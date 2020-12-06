function squareStar(n) {
    let str = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str = str.concat(" *")
        }
        str = str.concat("\n")
    }
    console.log(str);
}
squareStar(7);


function middleFreiSquare(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if(i === 1 || i === n || j === 1 || j === n) {
                str = str.concat(" *");
            }else {
                str = str.concat("  ");
            }
        }
        str = str.concat("\n")
    }
    console.log(str);
}
middleFreiSquare(7);


function triangle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= (n - i); k++) {
            str = str.concat("  ");
        }
        for (let j = 1; j <= i; j++) {
            str = str.concat(" *  ");
        }
        str = str.concat("\n")
    }
    console.log(str);
}
triangle(7);


function reversedTriangle(n){
    let str = "";
    for(let i = 1; i <= n; i++ ){
        for(let j = 1; j <= n; j++){
            if( j >= i ){
                str = str.concat("*");
            }
        }
        str = str.concat("\n")
    }

    console.log(str)
}
reversedTriangle(7);

function middleFreiReversedtriang(n) {
    str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            str = str.concat("  ");
        }

        for (j = 1; j <= (n * 2 - (2 * i - 1)); j++) {
                if (i === 1 || j === 1 || j === (n * 2 - (2 * i - 1))) {
                str = str.concat(" *");
            } else {
                str = str.concat("  ");
            }
        }

        str = str.concat("\n")
    }
    console.log(str)

}
middleFreiReversedtriang(7);


function sandClock(n) {
    let str = ""
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k < i; k++) {
            str = str.concat("  ");
        }
        for (let j = i; j <= n; j++) {
            str = str.concat(" *  ");
        }
        str = str.concat("\n")
    }

    for (let i = n - 1; i >= 1; i--) {
        for (let k = 1; k < i; k++) {
            str = str.concat("  ");
        }
        for (let j = i; j <= n; j++) {
            str = str.concat(" *  ");
        }
        str = str.concat("\n")
    }
    console.log(str)
}
sandClock(7);


function middleFreiTriangle (n) {
    let str = "";
    for (let i = 0; i < n; i++){
        for (let j = 0; j <= i; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == i  ) {
                str = str.concat("* ");
            } else {
                str = str.concat("  ");
            }

        }
        str = str.concat("\n")
    }
    console.log(str)
}
middleFreiTriangle(7);


function middleFreiSandClock(n) {
    str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            str = str.concat("  ");
        }

        for (j = 1; j <= (n * 2 - (2 * i - 1)); j++) {
            if (i === 1 || j === 1 || j === (n * 2 - (2 * i - 1))) {
                str = str.concat(" *");
            } else {
                str = str.concat("  ");
            }
        }

        str = str.concat("\n")
    }
    for (let i = 2; i <= n; i++) {
        for (let k = 1; k <= (n - i); k++) {
            str = str.concat("  ");
        }
        for (let j = 1; j <= i; j++) {
            str = str.concat(" *  ");
        }
        str = str.concat("\n")
    }
    console.log(str);

}
middleFreiSandClock(7);

