const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            console.log(action.id)
            return {themeId: action.id}

        default:
            return state
    }
}
export type changeThemeIdAT = {
    type: 'SET_THEME_ID'
    id:number
}
export const changeThemeId = (id: number): changeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any



