export function checkInput(nodeDuChamp, regex) {
    if (!nodeDuChamp.value || !regex.test(nodeDuChamp.value)) {
        nodeDuChamp.value = ''        
        nodeDuChamp.placeholder = 'Champs incorrect'
        nodeDuChamp.classList = 'create__form__input create__form__input--wrong'
        return true;
    }
    else {
        nodeDuChamp.placeholder = ''
        nodeDuChamp.classList = 'create__form__input'
        return false;
    }
}

