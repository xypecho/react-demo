export const type = {
    SWITCH_MENU: 'SWITCH_MENU'
};

export function SwitchMenu(menuName) {
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}