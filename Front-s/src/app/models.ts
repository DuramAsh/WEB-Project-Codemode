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
    
]
export interface Tutor{
    id: number;
    name: string;
    description: string;
    salary: number;
}

export interface Token{
    token: string;
}