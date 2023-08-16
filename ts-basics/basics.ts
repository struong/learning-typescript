let userName: string = "Ste"
let hasLoggedIn: boolean = true
userName += "last name"

console.log(hasLoggedIn)

let myNumber: number = 10

let myRegex: RegExp = /foo/

const names: string[] = userName.split(" ")

const myValyes: Array<number> = [1, 2, 3, 4]

// objects
interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Jack",
    last: "Herrington"
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"

if (ids[40] == "D") {
}

for (let i: number = 0; i < 10; i++) {
    console.log(i)
}

[1, 2, 3].forEach(v => {
    console.log(v);
});

const out = [4, 5, 6].map(v => `${v * 10}`)

