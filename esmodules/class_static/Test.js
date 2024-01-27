export default class Test {

    constructor(name) {
        Test.staticData++;
        this.name = name;
    }

    show() {
        console.log(this.name + ":" + Test.staticData)
    }

}

Test.staticData = 0;