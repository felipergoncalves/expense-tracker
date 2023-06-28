import { Item } from '../types/Item';

export const items: Item[] = [
    { date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 9, 15), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2021, 10, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
    { date: new Date(2023, 5, 20), category: 'food', title: 'McDonalds', value: 32.25},
    { date: new Date(2023, 5, 8), category: 'food', title: 'Burguer King', value: 25},
    { date: new Date(2023, 5, 8), category: 'rent', title: 'Aluguel', value: 1200},
    { date: new Date(2023, 5, 15), category: 'salary', title: 'Salário ACME', value: 1000},
];