function sayHello(message) {
    console.log(message);
    // アロー関数式を追加
    const Bye = () => console.log('Bye');
    Bye();
}

sayHello('Hello Node.js!');