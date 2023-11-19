export interface Employee{
    id: number;
    firstName: string;
    lastname: string;
    email: string
}

export const dummyEmployeeList: Employee[] =
    [
        {

            id: Math.random(),
            firstName: "Dummy1",
            lastname: "Dummy1",
            email: "dummy@gmail.com"

        },
        {
            id: Math.random(),
            firstName: "Dummy2",
            lastname: "Dummy2",
            email: "dummy2@gmail.com"
        },
    ];

export enum PageEnum {
    list,
    add,
    edit,

}