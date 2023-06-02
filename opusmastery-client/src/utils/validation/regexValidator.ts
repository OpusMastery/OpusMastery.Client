type Field = 'email' | 'password' | 'phoneNumber';

export function checkWithRegex(fieldName: Field, value: string): boolean {
    const regexDictionary: { [key: string]: RegExp } = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.\w{1,3})+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,64}$/gm,
    }

    return regexDictionary[fieldName].test(value);
}
