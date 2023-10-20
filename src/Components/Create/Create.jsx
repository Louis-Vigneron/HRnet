import { states, departement } from "../../Data/data"
import { useDispatch } from 'react-redux';
import { add } from '../../Utils/Redux';
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Create() {
    const [newEmployee, setNewEmployee] = useState([])
    const dispatch = useDispatch();
    const handleAddClick = (e) => {
        e.preventDefault()
        const inputFirstName = document.getElementById('inputFirstName')
        const inputLastName = document.getElementById('inputLastName')
        const inputDateBirth = document.getElementById('inputDateBirth')
        const inputStartDate = document.getElementById('inputStartDate')
        const inputDepartment = document.getElementById('inputDepartment')
        const inputStreet = document.getElementById('inputStreet')
        const inputCity = document.getElementById('inputCity')
        const inputState = document.getElementById('inputState')
        const inputZipCode = document.getElementById('inputZipCode')        
              
        checkInput(inputFirstName, regexName) 
        checkInput(inputLastName, regexName) 
        checkInput(inputDateBirth, regexDate) 
        checkInput(inputStartDate, regexDate) 
        checkInput(inputStreet, regexAddress) 
        checkInput(inputCity, regexCity) 
        checkInput(inputZipCode, regexZipCode)

        if (!checkInput(inputFirstName, regexName) &&
            !checkInput(inputLastName, regexName) &&
            !checkInput(inputDateBirth, regexDate) &&
            !checkInput(inputStartDate, regexDate) &&
            !checkInput(inputStreet, regexAddress) &&
            !checkInput(inputCity, regexCity) &&
            !checkInput(inputZipCode, regexZipCode)) {
            const newEmployeeData = {
                "id": Math.floor(Math.random() * (1000 - 250 + 1)) + 250,
                "employee": {
                    "firstName": inputFirstName.value,
                    "lastName": inputLastName.value,
                    "startDate": formatDateUS(inputStartDate.value),
                    "department": inputDepartment.value,
                    "dateOfBirth":formatDateUS(inputDateBirth.value),
                    "street": inputStreet.value,
                    "city": inputCity.value,
                    "state": inputState.value,
                    "zipCode": inputZipCode.value
                }
            }
            setNewEmployee(newEmployeeData)
            let openModal = document.querySelector('.modal')
            openModal.style.display ='block'
            //
        }


    };
    const handleCancelClick = () =>{
        let closeModal = document.querySelector('.modal')
        closeModal.style.display ='none'
    }
    const handleConfirmClick = () =>{
        let closeModal = document.querySelector('.modal')
        const clearInputs = document.querySelectorAll('.create__form__input')
        clearInputs.forEach(el =>{
            el.value = ''
        })
        closeModal.style.display ='none'
        dispatch(add(newEmployee));
       
    }
    return (
        
        <div className="create">
             <Modal handleCancelClick={handleCancelClick} handleConfirmClick={handleConfirmClick}/>
            <h2 className="create__title">Create Employee</h2>
            <form className="create__form">
                <div className="create__form__box">
                    <label className="create__form__label" htmlFor="firstName" >First Name</label>
                    <input className="create__form__input" type="text" id="inputFirstName" />
                    <label className="create__form__label" htmlFor="lastName">Last Name</label>
                    <input className="create__form__input" type="text" id="inputLastName" />
                    <label className="create__form__label" htmlFor="dateBirth">Date of Birth</label>
                    <input className="create__form__input" type="date" id="inputDateBirth" />
                    <label className="create__form__label" htmlFor="startDate">Start Date</label>
                    <input className="create__form__input" type="date" id="inputStartDate" />
                    <label className="create__form__label" htmlFor="department">Department</label>
                    <select className="create__form__input" name="department" id="inputDepartment">
                        {departement.map((el, index) => <option value={el} key={index}>{el}</option>)}
                    </select>
                </div>
                <div className="create__form__box">
                    <h3 className="create__form__box__title">Address</h3>
                    <label className="create__form__label" htmlFor="street">Street</label>
                    <input className="create__form__input" type="text" id="inputStreet" />
                    <label className="create__form__label" htmlFor="city">City</label>
                    <input className="create__form__input" type="text" id="inputCity" />
                    <label className="create__form__label" htmlFor="state">State</label>
                    <select className="create__form__input" name="state" id="inputState">
                        {states.map((el) => <option value={el.name} key={el.abbreviation}>{el.name}</option>)}
                    </select>
                    <label className="create__form__label" htmlFor="zipCode">Zip Code</label>
                    <input className="create__form__input" type="number" id="inputZipCode" />
                </div>
                <button onClick={handleAddClick} className="create__form__button" type="submit">Save</button>
            </form>
        </div>
    )
}

const regexName = /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/;
const regexAddress = /^[A-Za-z0-9\s]{5,50}$/;
const regexCity = /^[A-Za-z\s]{3,20}$/;
const regexZipCode = /^\d{6}$/
const regexDate = /^\d/

function checkInput(nodeDuChamp, regex) {
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

function formatDateUS(dateValue){
    const parts = dateValue.split('-'); 
    const formattedDate = parts[1] + '/' + parts[2] + '/' + parts[0];
    return formattedDate
}