import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 22th 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
            </div>
            <div className='expense-item__price'>$200</div>
        </div>
    );
}

export default ExpenseItem;