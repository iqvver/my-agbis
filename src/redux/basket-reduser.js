const ADD_BASKET = 'ADD_BASKET'; // переменная добавления в карзину услуги
const DEL_BASKET = 'DEL_BASKET'; // переменная добавления в карзину услуги
const EDIT_BASKET = 'EDIT_BASKET'; // переменная добавления в карзину услуги

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
            count: 1,
            price: '14000',
            totalSum: 14000,
        },
    ],

    catalogList: [
        {
            id: 0,
            name: 'Шкаф-купе',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/6a5/d36b854a-3248-11ec-80ff-000c2973c28c_01.webp',
            descr: 'С ящиками',
            category: 'Шкафы',
            count: 1,
            price: '14000',
            totalSum: 14000,
        },
        {
            id: 1,
            name: 'Диван угловой',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/e59/3a290cb2-f9a6-11ea-80f1-000c2973c28c_01.webp',
            descr: 'Раскладной',
            category: 'Диваны',
            count: 1,
            price: '20400',
            totalSum: 20400,
        },
        {
            id: 2,
            name: 'Комод HELIO',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/7e2/cd98641e-3540-11eb-80f5-000c2973c28c_01.webp',
            descr: 'Коллекция от Helvetia',
            category: 'Комоды',
            count: 1,
            price: '4000',
            totalSum: 4000
        },
        {
            id: 3,
            name: 'Стол обеденный',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/a32/ef3f79d6-6d0a-11ea-80df-000c2973c28c_01.webp',
            descr: 'Раскладной LIZARD',
            category: 'Столы',
            count: 1,
            price: '38400',
            totalSum: 38400
        },
        {
            id: 4,
            name: 'Диван прямой',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/ef8/8064e71a-9521-11ea-80ed-000c2973c28c_01.webp',
            descr: 'Раскладной',
            category: 'Диваны',
            count: 1,
            price: '40000',
            totalSum: 40000,
        },
        {
            id: 5,
            name: 'Комплект спальни',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/3d6/b289c0fe-ba1e-11ea-80ef-000c2973c28c_01.webp',
            descr: 'Основание ЛДСП',
            category: 'Комплект',
            count: 1,
            price: '111100',
            pritotalSumce: 111100,
        },
        {
            id: 6,
            name: 'Шкаф-купе',
            img: 'https://boxx.ru/upload/resize_cache/webp/iblock/c3b/fdfaabfd-b7a5-11eb-80fa-000c2973c28c_01.webp',
            descr: 'Двухдверный шкаф-купе',
            category: 'Шкафы',
            count: 1,
            price: '45000',
            totalSum: 45000,
        },
    ],

    isInArr: false,
};

// редьюсер добавления
const basketReducer = (state = initialState, action) => {
    switch (action.type) {

        case EDIT_BASKET: {
            //редактирование
            if (action.count < 0) {
                action.count = 0;
            };
            state.basket.forEach(el => {
                if (el.id === action.id) {
                    return { ...state.basket, ...el.count = action.count, ...el.totalSum = el.price * action.count }
                }
            })
            return { ...state, ...state.basket }
        }

        case ADD_BASKET: {
            // добавление
            let iId = action.item.id;
            let iCategory = action.item.category;
            let iImg = action.item.img;
            let iName = action.item.name;
            let iPrice = action.item.price;
            let iCount = action.item.count;
            let iTotalSum = iPrice * iCount;
            state.basket.find(el => {
                if (el.id === action.item.id) {
                    return state.isInArr = true;
                } return state.isInArr = false;
            })
            if (!state.isInArr) {
                return {
                    ...state, basket: [...state.basket, {
                        id: iId,
                        category: iCategory,
                        name: iName,
                        img: iImg,
                        price: iPrice,
                        count: iCount,
                        totalSum: iTotalSum,
                    }]
                }
            }
        }
            break;
        case DEL_BASKET: {
            // удаление
            return { ...state, basket: [...state.basket.filter(el => el.id !== action.id)] }
        }

        default:
            return state;
    }
}

// экшен для добавления в карзину
const onAddAC = (item) => ({ type: ADD_BASKET, item });
const qqAC = (count, id) => ({ type: EDIT_BASKET, count, id });
const onDelAC = (id) => ({ type: DEL_BASKET, id });

export const onAdd = (item) => {
    return (dispatch) => {
        if (item) {
            dispatch(onAddAC(item));
        }
    }
}
export const onDel = (id) => {
    return (dispatch) => {
        dispatch(onDelAC(id));
    }
}
export const editCount = (count, id) => {
    return (dispatch) => {
        dispatch(qqAC(count, id));
    }
}

export default basketReducer;