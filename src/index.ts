import { MessagesEnum, ObjectType } from "./types";

console.log("hello from ts");
let someNumber = 12;
let someString: "hello" | "privet" | boolean = "hello";
let someBool = false;

const getStringOrBool = (): boolean | "hello" => {
    return Math.random() > 0.5 ? "hello" : true;
};

someString = getStringOrBool();
 
let someValue: boolean;

// someValue
if (typeof someValue !== "boolean") someString = someValue;
if (typeof someValue === "number") someNumber = someValue;

const person = {
    name: "hello",
    age: 150,
    isOld: true,
};
const anotherPerson: typeof person = {
    name: "person",
    age: 10,
    isOld: false,
};

let newValue: number;
let testValue: boolean | number | undefined;

const setTestValueToNew: (
    newVal: number,
    test: boolean | number | string
) => undefined = (newVal, test) => {
    console.log(test, newVal);
    // if((typeof test !== "number")) return

    if (test === true) return;
    if (test == false) return;
    if (typeof test === "string") return;

    newVal = test;
};
setTestValueToNew(newValue, null);

// someString

const someArray: ((number | string)[] | number | string)[][] = [
    [["helol", "qwert"], "asd"],
    [["123", 1]],
    [[1], 123],
];

const arr: Array<Array<Array<number | string> | number | string>> = [
    [2],
    [3],
    [2],
];

let someObject: ObjectType = {
    id: 1,
    name: "hello",
};
// someObject.age = 2
const funnyObj = { hasHome: false };

const setHomeToObject = (obj: ObjectType, newAddress: string): ObjectType => {
    if (someObject?.values !== undefined) return;

    someObject.hasHome = "zxc";

    return { ...obj, hasHome: newAddress };
};

// setHomeToObject(funnyObj, 'helloStreet')
someObject = setHomeToObject(someObject, "net doma");

console.log(
    typeof someObject === "string" || someObject.hasHome
        ? "ura novoselye"
        : "snova v korobku"
);

const promptValue: string | null = prompt("Введите имя");



const showMessage = (code: MessagesEnum) => {
    switch (code) {
        case MessagesEnum.PERSON_NAME_NULL:
            console.log("hello... who");
            break;
        case MessagesEnum.PERSON_NAME_LONG:
            console.log("hello... long name");
            break;
        case MessagesEnum.PERSON_NAME_NORMAL:
            console.log("hello perfect");
            break;
        default:
            console.log("unexpected message");
            break;
    }

};

const showGreeting = () => {

    if (promptValue === null) {
        showMessage(MessagesEnum.PERSON_NAME_NULL);
    } else if (promptValue.length > 5) {
        showMessage(MessagesEnum.PERSON_NAME_LONG);
    } else {
        showMessage(MessagesEnum.PERSON_NAME_NORMAL);
    }
};



showMessage(MessagesEnum.PERSON_NAME_LONG)

showGreeting();

type TUser = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
    age: number
}

type TUsersArray = TUser[];
const users: any[] = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    }
]

const usersWithHeight = users.map(user => {
    return { ...user, avatarShortLink: user.avatar, height: Math.random() * 100 }
})


// currency enum
enum ProductCurrenciesEnum {
    PRODUCT_CURRENCY_DOLLAR = 'dollar',
    PRODUCT_CURRENCY_EURO = 'euro',

}
// type enum
enum ProductTypesEnum {
    PRODUCT_TYPE_BURGER = 'burger',
    PRODUCT_TYPE_CAKE = 'cake',
    
}

type TProduct  = {
    id: number,
    name: string,
    price: number,
    currency: ProductCurrenciesEnum
    ingredients: string[]
    type: ProductTypesEnum, 
    available: boolean
}




const products:TProduct[] = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: ProductCurrenciesEnum.PRODUCT_CURRENCY_EURO,  //"euro"
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: ProductTypesEnum.PRODUCT_TYPE_BURGER,//"burger"
        available: true
    },
    {
        id: 2,
        name: "Burger Lite",
        price: 2,
        currency: ProductCurrenciesEnum.PRODUCT_CURRENCY_EURO,  //"euro"
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: ProductTypesEnum.PRODUCT_TYPE_BURGER, //"burger"
        available: true
    },
    {
        id: 3,
        name: "Cake Lite",
        price: 2,
        currency: ProductCurrenciesEnum.PRODUCT_CURRENCY_DOLLAR,  //"dollar"
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: ProductTypesEnum.PRODUCT_TYPE_CAKE, //"cake"
        available: false
    },
];

