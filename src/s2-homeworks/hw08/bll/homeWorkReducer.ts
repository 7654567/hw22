import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if(action.payload === 'down'){
                newState.sort((a:UserType, b:UserType) => {
                    if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return 1
                    else if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return -1
                    else return 0
                })
            } else if (action.payload === 'up') {
                newState.sort((a:UserType, b:UserType) => {
                    if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1
                    else if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1
                    else return 0
                })
            }

            return newState // need to fix
        }
        case 'check': {
            let newState = [...state]
            return newState.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
