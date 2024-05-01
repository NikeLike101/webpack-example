export type ObjectType = Construct & ({
    values?: string[]

    some?: string,
    age?: number,
    hasHome?: boolean | string,
    marks?: number[]
}  ) 


// export type ObjectType = Construct & ({
//     values: string[]
// }| {
//     some: string,
//     age: number,
//     hasHome: boolean | string,
//     marks: number[]
// }  ) 

type Construct = {
    name: string,
    id: number
}

interface SomeInterface {
    name: string
    id: number
}
interface SomeSecondInterface extends SomeInterface {
    name: string
    id: number
}


export enum MessagesEnum {
     PERSON_NAME_NULL = 'anon',
 PERSON_NAME_LONG = 'long name',
 PERSON_NAME_NORMAL = 'excelent'
}