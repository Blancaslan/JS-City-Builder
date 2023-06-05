class number1 {
    constructor( property1 ) {
        this.property1 = property1
    }

    getProperty1() {
        return this.property1
    }
}

class number2 extends number1 {
    constructor( property1, property2) {
        super( property1 )
        this.property2 = property2
    }

    getProperty2() {
        return this.property2
    }
}

const sure = new number2( 3, 5)

console.log(sure.getProperty1())

