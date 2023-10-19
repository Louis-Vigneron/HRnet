import { states, departement } from "../../Data/data"
import { useDispatch } from 'react-redux';
import { add } from '../../Utils/Redux';

export default function Create() {
    const dispatch = useDispatch();
    const handleAddClick = (e) => {
        e.preventDefault()
        dispatch(add('newValue'));
      };
    return (
        <div className="create">
            <h2 className="create__title">Create Employee</h2>
            <form className="create__form">
                <div className="create__form__box">
                    <label className="create__form__label" htmlFor="firstName">First Name</label>
                    <input className="create__form__input" type="text" />
                    <label className="create__form__label" htmlFor="lastName">Last Name</label>
                    <input className="create__form__input" type="text" />
                    <label className="create__form__label" htmlFor="dateBirth">Date of Birth</label>
                    <input className="create__form__input" type="text" />
                    <label className="create__form__label" htmlFor="startDate">Start Date</label>
                    <input className="create__form__input" type="text" />
                    <label className="create__form__label" htmlFor="department">Department</label>
                    <select className="create__form__input" name="department" id="department">
                        {departement.map((el, index) => <option value={el} key={index}>{el}</option>)}
                    </select>
                </div>
                <div className="create__form__box">
                    <h3 className="create__form__box__title">Address</h3>
                    <label className="create__form__label" htmlFor="street">Street</label>
                    <input className="create__form__input" type="text" />
                    <label className="create__form__label" htmlFor="city">City</label>
                    <input className="create__form__input" type="text" />
                    <label className="create__form__label" htmlFor="department">State</label>
                    <select className="create__form__input" name="department" id="department">
                        {states.map((el) => <option value={el.name} key={el.abbreviation}>{el.name}</option>)}
                    </select>
                    <label className="create__form__label" htmlFor="startDate">Zip Code</label>
                    <input className="create__form__input" type="number" />
                </div>
                <button onClick={handleAddClick} className="create__form__button" type="submit">Save</button>
            </form>
        </div>
    )
}