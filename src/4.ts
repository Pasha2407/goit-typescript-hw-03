class Key {
    constructor(private signature: number = Math.floor(Math.random() * 99) + 1) {
    }
    getSignature(): number {
        return this.signature; // signature = від 1 до 99
    }
}

class Person {
    constructor(private key: Key) {
    }
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
    constructor(protected key: Key = key) {
    }
    comeIn(tenant: Person): void {
        if (this.door) this.tenants.push(tenant); // якщо двері відкриті то орендар заходить в будинок
    }
    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) this.door = true; // якщо ключі збігаються то двері відкриті
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export { };