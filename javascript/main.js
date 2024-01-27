import { fooFunc } from './foo.js';
fooFunc();

function apple(num) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(`りんごは${num}個`);
            num += 1;
            resolve(num);
        }, 1000);
    });
}

apple(1)
    .then(function(num) {
        return apple(num);
    })
    .then(function(num) {
        return apple(num);
    })
    .then(function(num) {
        apple(num);
        console.log("終了！")
    });