class HelloWorld {
    public hello(input:string):string {
        if (input === '') {
            return "Hello, World!";
        }
        else {
            return "Hello, " + input + "!";
        }
    }
}

module.exports = HelloWorld;