const ADD_DRY_SERVICES = 'ADD_DRY_SERVICES'; // переменная добавления в карзину услуги
const ADD_AQA_SERVICES = 'ADD_AQA_SERVICES'; // переменная добавления в карзину услуги

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
        /*
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
    */
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
            price: 1400
        },
        {
            id: 1,
            category: 'Аквачистка',
            name: 'Пиджак натуральный шелк',
            price: 520
        },
        {
            id: 2,
            category: 'Аквачистка',
            name: 'Пиджак с коротким рукавом без подклада',
            price: 3000
        },
        {
            id: 3,
            category: 'Аквачистка',
            name: 'Пиджак натуральный шёлк с коротким рукавом',
            price: 11000
        },
    ],
};
// редьюсер добавления
const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DRY_SERVICES: {
            // добавление

            let iId = action.id;
            let iCategory = 'Химчистка';
            let iName = state.dryServices[iId].name;
            let iSum = state.dryServices[iId].price;
            let iCount = 1;

            return {
                ...state,
                basket: [...state.basket,
                {
                    category: iCategory,
                    name: iName,
                    sum: iSum,
                    count: iCount,
                }]
            };
        }

        case ADD_AQA_SERVICES: {
            // добавление
            let iId = action.id;
            let iCategory = 'Аквачистка';
            let iName = state.aqaServices[iId].name;
            let iSum = state.aqaServices[iId].price;
            let iCount = 1;

            return {
                ...state,
                basket: [...state.basket,
                {
                    category: iCategory,
                    name: iName,
                    sum: iSum,
                    count: iCount,
                }]
            };
        }

        default:
            return state;
    }
}

// экшен для добавления услуги в карзину
export const newServicesAC = (id) => ({ type: ADD_DRY_SERVICES, id })
export const newAqaServicesAC = (id) => ({ type: ADD_AQA_SERVICES, id })

export default basketReducer;