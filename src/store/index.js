import {cardApi} from '../helpers/Card'

export const store = {
    createStore: (store) => {
        cardApi.writeToStorage(store)
    }
}