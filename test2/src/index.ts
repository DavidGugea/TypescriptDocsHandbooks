let obj: any = { x : 0 };

function greet(name : string) { 
    console.log(`Hello ${name}`);
}

interface Point { 
    x : number;
    y : number;
}

function greeter(fn: (a: string) => void) {
    fn("hello, world");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

function printCoord(pt: Point) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

function padLeft(padding: number | string, input: string): string {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }

    return padding + input;
}

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

printCoord({x : 100, y : 100});