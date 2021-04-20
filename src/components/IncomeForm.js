import React, {useRef} from 'react'

function IncomeForm({income, setIncome}) {

    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const AddIncome = e => {
        e.preventDefault();

        // console.log(desc.current.value);
        let d = date.current.value.split("-");
    }

    return (
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc"
                placeholder="Income Description ..." ref={desc} />
                <input type="number" name="price" id="price"
                placeholder="Price." ref={price} />
                <input type="date" name="date" id="date"
                placeholder="Income date" ref={date} />
                <input type="submit" value="Add Income" />
            </div>
        </form>
    )
}

export default IncomeForm;
