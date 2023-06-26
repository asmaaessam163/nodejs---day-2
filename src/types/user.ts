
export interface User {
    userId: string,
    name: string,
    email: string,
    userName: string,
    password: string,
    mobileNumber: string,
}

export interface UserFilter {
    name?: string,
    email?: string,
    userName?: string,
    password?: string,
    mobileNumber?: string,
}