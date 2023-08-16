import { Promise } from 'es6-promise'

function addNumbers(a: number, b: number): number {
    return a + b;
}

// Exports addNumbers as the default export from this module
export default addNumbers

export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`

// union type  
export const format = (title: string, param: string | number): string => `${title} ${param}`

export const printFormat = (title: string, param: string | number): void => console.log(format(title, param))

export const fetchData = (url: string): Promise<string> => Promise.resolve('Data from ${url}')

// names is like String* names in Java
function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`
}

// optional chaining operator ?, makes sure that user is defined before derefrencing it
// null coalescing operator ??, returns the first non-null value
export function getName(user: { first: string, last: string }): string {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}

