const ADD_BASKET = 'ADD_BASKET'; // переменная добавления в карзину услуги

// иноциализация переменных
let initialState = {
    // массив товаров
    basket: [
        {
            id: 0,
            name: 'Шкаф-купе',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/6a5/d36b854a-3248-11ec-80ff-000c2973c28c_01.webp',
            descr: 'с ящиками',
            category: 'Шкафы',
            price: '14000'
        },
    ],

    catalogList: [
        {
            id: 0,
            name: 'Шкаф-купе',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/6a5/d36b854a-3248-11ec-80ff-000c2973c28c_01.webp',
            descr: 'С ящиками',
            category: 'Шкафы',
            price: '14000'
        },
        {
            id: 1,
            name: 'Диван угловой',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/e59/3a290cb2-f9a6-11ea-80f1-000c2973c28c_01.webp',
            descr: 'Раскладной',
            category: 'Диваны',
            price: '20400'
        },
        {
            id: 2,
            name: 'Комод HELIO',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/7e2/cd98641e-3540-11eb-80f5-000c2973c28c_01.webp',
            descr: 'Коллекция от Helvetia',
            category: 'Комоды',
            price: '4000'
        },
        {
            id: 3,
            name: 'Стол обеденный',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/a32/ef3f79d6-6d0a-11ea-80df-000c2973c28c_01.webp',
            descr: 'Раскладной LIZARD',
            category: 'Столы',
            price: '38400'
        },
        {
            id: 4,
            name: 'Диван прямой',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/ef8/8064e71a-9521-11ea-80ed-000c2973c28c_01.webp',
            descr: 'Раскладной',
            category: 'Диваны',
            price: '40000'
        },
        {
            id: 5,
            name: 'Комплект спальни',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/3d6/b289c0fe-ba1e-11ea-80ef-000c2973c28c_01.webp',
            descr: 'Основание ЛДСП',
            category: 'Комплект',
            price: '111100'
        },
        {
            id: 6,
            name: 'Шкаф-купе',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/c3b/fdfaabfd-b7a5-11eb-80fa-000c2973c28c_01.webp',
            descr: 'Двухдверный шкаф-купе',
            category: 'Шкафы',
            price: '45000'
        },
    ]
};

// редьюсер добавления
const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET: {
            // добавление
            return { ...state, basket: [...state.basket, action.item] }
        }

        default:
            return state;
    }
}

// экшен для добавления услуги в карзину
export const onAddAC = (item) => ({ type: ADD_BASKET, item });

export const onAdd = (item) => {
    return (dispatch) => {
        dispatch(onAddAC(item));
    }
}

export default basketReducer;