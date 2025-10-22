  console.log(myname.match(/n/g));
            console.log(myname.match(/n/gi));
            console.log(myname.localeCompare("Anindita"));
            console.log(myname.valueOf());
            console.log(myname.normalize());
            console.log(myname.padStart(15, "*"));
            console.log(myname.padEnd(15, "*"));
            console.log(myname.substring(0,4));
            console.log(myname.substring(4,0));
            console.log(myname.substr(0,4));
            console.log(myname.substr(4,4));
            console.log(myname.substr(-4));
            console.log(myname.charAt(100)); // Empty string
            console.log(myname[0]); // Accessing characters like an array
            console.log(myname[100]); // undefined
            console.log(typeof undefined); // "undefined"
            console.log(typeof null); // "object"
            console.log(typeof NaN); // "number"
            console.log(NaN === NaN); // false
            console.log(Number("123")); // 123
            console.log(Number("123abc")); // NaN
            console.log(parseInt("123abc")); // 123
            console.log(parseFloat("123.45abc")); // 123.45
            console.log(isNaN("abc")); // true
            console.log(isNaN("123")); // false
            console.log(isFinite(123)); // true
            console.log(isFinite(Infinity)); // false
            console.log(isFinite(NaN)); // false
            console.log(Math.PI); // 3.141592653589793
            console.log(Math.E); // 2.718281828459045
            console.log(Math.sqrt(16)); // 4
            console.log(Math.pow(2, 3)); // 8
            console.log(Math.abs(-10)); // 10
            console.log(Math.ceil(4.2)); // 5
            console.log(Math.floor(4.8)); // 4
            console.log(Math.round(4.5)); // 5
            console.log(Math.min(1, 2, 3, -4, 5)); // -4
            console.log(Math.max(1, 2, 3, -4, 5)); // 5
            console.log(Math.random()); // Random number between 0 and 1
            console.log(Math.trunc(4.9)); // 4
            console.log(Math.sign(-5)); // -1
            console.log(Math.cbrt(27)); // 3
            console.log(Math.log(10)); // 2.302585092994046
            console.log(Math.log2(8)); // 3