export default function Employees(){
    return(
        <div className="employees">
            <h2 className="employees__title">Current Employees</h2>
            <div>
                <p>Show </p>
                    <select name="number" id="number">
                        <option value="10">10</option>
                        <option value="10">25</option>
                        <option value="10">50</option>
                        <option value="10">100</option>
                    </select>
                <p>entries</p>
            </div>
            <div>
                <label htmlFor="search">Search :</label>
                <input type="text" />
            </div>
        </div>
    )
}