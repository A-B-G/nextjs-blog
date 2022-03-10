import { useState } from 'react';


// export default initialVal => {
//     //define initial state and fn to update it
//     const [value, setValue] = useState(initialVal);
//     //define handleChange function
//     const handleChange = (e) => {
//         setValue(e.target.value);
//     }
//     //define reset function
//     const resetValue = () => {
//         setValue("");
//     }
//     //return all at end as an array
//     return [value, handleChange, resetValue];

// }
export const initialVal = (val) => {
    const [value, setValue] = useState(val);

    const handleChange = (e) => {
        let eName = e.target.name;
        let eValue = e.target.value;
        let eObject = { [eName]: eValue}
        setValue(eObject[eName]);
    }

    const resetValue = () => {
        setValue("");
    }
    return [value, handleChange, resetValue];
}
