const ADD_DRY_SERVICES = 'ADD_DRY_SERVICES'; // переменная добавления в карзину услуги

// иноциализация переменных
let initialState = {
    // массив услуг
    basket: [
        {
            id: 0,
            category: 'Химчистка',
            name: 'Пальто',
            sum: 400, 
            count: 1
        },
        {
            id: 1,
            category: 'Химчистка',
            name: 'Пальтоvffds',
            sum: 1400, 
            count: 1
        },
        {
            id: 2,
            category: 'Химчистка',
            name: 'Пальтоvffds',
            sum: 1400, 
            count: 1
        }
    ],

    dryServices: [
        {
            id: 0,
            category: 'Химчистка',
            name: 'Пальто, полупальто с подстежкой из натурального меха',
            price: 1400
        },
        {
            id: 1,
            category: 'Химчистка',
            name: 'Ветровка',
            price: 520
        },
        {
            id: 2,
            category: 'Химчистка',
            name: 'Ветровка (натуральный шелк)',
            price: 3000
        },
        {
            id: 3,
            category: 'Химчистка',
            name: 'Пальто, полупальто с подстежкой из натурального меха',
            price: 11000
        },
    ],

    aqaServices: [
        {
            id: 0,
            category: 'Аквачистка',
            name: 'Пиджак',
            price: 1400, count: 2
        },
        {
            id: 1,
            category: 'Аквачистка',
            name: 'Пиджак натуральный шелк',
            price: 520, count: 1
        },
        {
            id: 2,
            category: 'Аквачистка',
            name: 'Пиджак с коротким рукавом без подклада',
            price: 3000, count: 1
        },
        {
            id: 3,
            category: 'Аквачистка',
            name: 'Пиджак натуральный шёлк с коротким рукавом',
            price: 11000, count: 1
        },
    ],
};
// редьюсер добавления
const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DRY_SERVICES: {
            // добавление
            let category = action.newCategory;
            let name = action.newName;
            let price = action.newPrice;
            let count = action.newCount;

            return {
                ...state,
                aqaServices: [...state.dryServices,
                {
                    category: category,
                    name: name,
                    price: price,
                    count: count,
                }]
            };
        }
        default:
            return state;
    }
}

// экшен для добавления услуги в карзину
export const newServicesAC = (newCategory, newName, newPrice, newCount) => ({ type: ADD_DRY_SERVICES, newCategory, newName, newPrice, newCount })

export default basketReducer;