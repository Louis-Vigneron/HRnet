export function formatDateUS(dateValue){
    const parts = dateValue.split('-'); 
    const formattedDate = parts[1] + '/' + parts[2] + '/' + parts[0];
    return formattedDate
}