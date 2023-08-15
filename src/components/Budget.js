import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, spending } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);

    const handleBudgetChange = (newBudget) => {
        if (newBudget < spending) {
            alert("Budget cannot be lower than spending");
        } else if (newBudget > 20000) {
            alert("Budget Cannot exceed 20000");
        } else {
            setEditableBudget(newBudget);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: $</span>
            <input
                type="number"
                value={editableBudget}
                onChange={(e) => handleBudgetChange(Number(e.target.value))}
                min={spending}
                max={20000}
                step={10}
            />
        </div>
    );
};

export default Budget;
