export default function Modal({handleCancelClick, handleConfirmClick}) {
 
    return (
        <div className="modal">
            <h2 className="modal__title">Confirm the creation of the employee ?</h2>
            <div className="modal__box">
                <button className="modal__box__button" onClick={handleCancelClick}>Cancel</button>
                <button className="modal__box__button" onClick={handleConfirmClick}>Confirm</button>
            </div>
        </div>
    )
}