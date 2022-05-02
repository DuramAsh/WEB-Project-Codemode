export interface Course{
    id: number;
    title: string;
    description: string;
    price: number;
    info: string;
    url: string;
}

export const courses = [
    {
        "id": 1,
        "title": "Python",
        "description": "Принципы программирования на языке Python",
        "price": 24000,
        "info": "Длительность:14 недель Курс преподается с нуля",
        "url": "https://api.iconify.design/teenyicons/python-outline.svg?color=%234825c0"  
    },
    {
        "id": 2,
        "title": "C++",
        "description": "Принципы программирования на языке C++",
        "price": 24000,
        "info": "Длительность:14 недель Курс преподается с нуля",
        "url": "https://api.iconify.design/bxl/c-plus-plus.svg?color=%234825c0"  
    },
    {
        "id": 3,
        "title": "ADS",
        "description": "Алгоритмы и структуры данных",
        "price": 32000,
        "info": "Длительность:14 недель Курс преподается с нуля",
        "url": "https://api.iconify.design/mdi/graph-outline.svg?color=%234825c0"  
    },
    {
        "id": 3,
        "title": "ADS",
        "description": "Алгоритмы и структуры данных",
        "price": 32000,
        "info": "Длительность:14 недель Курс преподается с нуля",
        "url": "https://api.iconify.design/mdi/graph-outline.svg?color=%234825c0" 
    },
    {
        "id": 3,
        "title": "ADS",
        "description": "Алгоритмы и структуры данных",
        "price": 32000,
        "info": "Длительность:14 недель Курс преподается с нуля",
        "url": "https://api.iconify.design/mdi/graph-outline.svg?color=%234825c0"  
    },
    {
        "id": 3,
        "title": "ADS",
        "description": "Алгоритмы и структуры данных",
        "price": 32000,
        "info": "Длительность:14 недель Курс преподается с нуля",
        "url": "https://api.iconify.design/mdi/graph-outline.svg?color=%234825c0"  
    }
    
]
export interface Tutor{
    id: number;
    name: string;
    info: string;
    email: string;
    url: string;
    image_url: string;
    phones: string[];
}

export interface Token{
    access: string;
    id: number;
}

export interface Info{
    id: number;
    comment: string;
    student: string;
    course: string;
}

export interface User{
    id: number;
    nickname: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    image_url: string;
    balance: number;
}

export interface RegUser{
    nickname: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface StCourse{
    id : number;
    status: string;
    time: string;
    amount: number;
    course: number;
    tutor: number;
}