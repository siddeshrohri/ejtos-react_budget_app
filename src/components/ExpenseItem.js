import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10, // Decrease the expense value by 10
        };
    
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '5px 10px',
        fontSize: '1rem',
        borderRadius: '50%',
        cursor: 'pointer',
        marginLeft: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    };

    const plusButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'green',
        color: 'white',
    };

    const minusButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'red',
        color: 'white',
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={(event) => increaseAllocation(props.name)} style={plusButtonStyle}>+</button></td>
        <td><button onClick={(event) => decreaseAllocation(props.name)} style={minusButtonStyle}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
