export const info = (message: string): void => {
    console.log(`%c${message}`, "color:blue");
}

export const success = (message: string): void => {
    console.log(`%c${message}`, "color:green");
}

export const warning = (message: string): void => {
    console.log(`%c${message}`, "color:yellow");
}

export const error = (message: string): void => {
    console.log(`%c${message}`, "color:ref");
}