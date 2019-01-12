/*
    Author: Patryk Bejcer
    Website: www.patrykbejcer.pl
*/

export default class Task {
    constructor(name) {
        this.name = name;
        this.date = new Date(2018, 11, 24);
    }
    getName() {
        return this.name;
    }
    setName(value) {
        if (typeof value === 'string') {
            return this.name = value;
        } else {
            console.log('value type is not a string');
        }
    }
}
