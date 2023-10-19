import { useDispatch, useSelector } from 'react-redux';
import { populate, clear, store } from '../../Utils/Redux';
import { useState, useEffect } from 'react';

store.subscribe(() => console.log(store.getState().employees))

export default function Employees() {
    const dispatch = useDispatch();
    const [selectValue, setSelectValue] = useState(10);
    const [index, setIndex] = useState(1);
    const totalEmployees = useSelector((state) => state.employees.length);
    const employees = useSelector((state) => state.employees);
    let numberPage = Math.ceil(totalEmployees / selectValue)

    useEffect(() => {
        let numberPage = document.querySelector('.employees__page__nav__box')
        numberPage.innerHTML = ''
        for (let x = 0; x < Math.ceil(totalEmployees / selectValue); x++) {
            if (x === 0) {
                numberPage.innerHTML += `<button class="employees__page__nav__box__numberPage employees__page__nav__box__numberPage--currentPage" id="${x + 1}">${x + 1}</button>`
            } else {
                numberPage.innerHTML += `<button class="employees__page__nav__box__numberPage" id="${x + 1}">${x + 1}</button>`
            }
        };    
        let test = document.querySelectorAll('.employees__page__nav__box__numberPage')
        test.forEach(el =>{
            el.addEventListener('click',handleSelectPage)
        })

    }, [totalEmployees, selectValue]);

    const handleClearClick = () => {
        dispatch(clear())
    }
    const handlePopulateClick = () => {
        dispatch(populate())
    }
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value)
        setIndex(1);
    }
    const handleNext = () => {
        if (numberPage > 0) {
            let currentPage = parseInt(document.getElementById(index).id)
            if (currentPage !== numberPage) {
                let allPages = document.querySelectorAll('.employees__page__nav__box__numberPage')
                allPages.forEach((el) => {
                       el.classList = 'employees__page__nav__box__numberPage'
                })
                const newIndex = currentPage + 1;
                let newCurrentPage = document.getElementById(newIndex)
                newCurrentPage.classList = 'employees__page__nav__box__numberPage employees__page__nav__box__numberPage--currentPage'
                setIndex(newIndex);
            }
        }
    }
    const handlePrevious = () => {
        if (numberPage > 0) {
            let currentPage = parseInt(document.getElementById(index).id)
            if (currentPage !== 1) {
                let allPages = document.querySelectorAll('.employees__page__nav__box__numberPage')
                allPages.forEach((el) => {
                       el.classList = 'employees__page__nav__box__numberPage'
                })
                const newIndex = currentPage - 1;
                let newCurrentPage = document.getElementById(newIndex)
                newCurrentPage.classList = 'employees__page__nav__box__numberPage employees__page__nav__box__numberPage--currentPage'
                setIndex(newIndex);
            }
        }
    };
    const handleSelectPage = (e) => {
        let allPages = document.querySelectorAll('.employees__page__nav__box__numberPage')
        allPages.forEach((el) => {
               el.classList = 'employees__page__nav__box__numberPage'
        })
        let newIndex = e.target.id;
        setIndex(newIndex);
        let newCurrentPage = document.getElementById(newIndex)
        newCurrentPage.classList = 'employees__page__nav__box__numberPage employees__page__nav__box__numberPage--currentPage'
    }

    const idMin = totalEmployees ? (selectValue * index) - selectValue + 1 : 0;
    const idMax = Math.min((selectValue * index), totalEmployees);
    const filteredEmployees = employees.filter(item => item.id >= idMin && item.id <= idMax);
    return (
        <div className="employees">
            <h2 className="employees__title">Current Employees</h2>
            <div className="employees__filter">
                <div className="employees__filter__show">
                    <p className="employees__filter__show__text">Show </p>
                    <select name="number" id="number" onChange={handleSelectChange}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <p className="employees__filter__show__text">entries</p>
                </div>
                <div className="employees__filter__search">
                    <label className="employees__filter__search__label" htmlFor="search">Search :</label>
                    <input type="text" />
                </div>
            </div>

            <div className="employees__table">
                <div className="employees__table__header">
                    <p className="employees__table__header__text">First Name</p>
                    <p className="employees__table__header__text">Last Name</p>
                    <p className="employees__table__header__text">Start Date</p>
                    <p className="employees__table__header__text">Department</p>
                    <p className="employees__table__header__text">Date of Birth</p>
                    <p className="employees__table__header__text">Street</p>
                    <p className="employees__table__header__text">City</p>
                    <p className="employees__table__header__text">State</p>
                    <p className="employees__table__header__text">Zip Code</p>
                </div>

                <div className="employees__table__data">
                    {filteredEmployees.length === 0 ? <p className="employees__table__data__empty"> No data available in table</p> : filteredEmployees.map((el) =>
                        <div className="employees__table__data__info" key={el.id}>
                            <p className="employees__table__data__info__text">{el.employee.firstName}</p>
                            <p className="employees__table__data__info__text">{el.employee.lastName}</p>
                            <p className="employees__table__data__info__text">{el.employee.startDate}</p>
                            <p className="employees__table__data__info__text">{el.employee.department}</p>
                            <p className="employees__table__data__info__text">{el.employee.dateOfBirth}</p>
                            <p className="employees__table__data__info__text">{el.employee.street}</p>
                            <p className="employees__table__data__info__text">{el.employee.city}</p>
                            <p className="employees__table__data__info__text">{el.employee.state}</p>
                            <p className="employees__table__data__info__text">{el.employee.zipCode}</p>
                        </div>
                    )}
                </div>

            </div>
            <div className="employees__page">
                <p className="employees__page__text">Showing {idMin} to {idMax} of {totalEmployees} entries</p>
                <div className="employees__page__nav">
                    <button className="employees__page__nav__button" onClick={handlePrevious}>Previous</button>
                    <div className='employees__page__nav__box'></div>
                    <button className="employees__page__nav__button" onClick={handleNext}>Next</button>
                </div>
            </div>
            <div className='employees__state'>
                <button className='employees__state__button' onClick={handlePopulateClick}>Populate</button>
                <button className='employees__state__button' onClick={handleClearClick}>Clear</button>
            </div>

        </div>
    )
}