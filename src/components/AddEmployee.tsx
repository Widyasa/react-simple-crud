import './style.css'
import {useState} from "react";
import {Employee} from "./Employee";


class IEmployee {
}

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: Employee ) => void
}
const AddEmployee = (props: Props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const {onBackBtnClickHnd, onSubmitClickHnd} = props;
    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    }
    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    }
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    }
    const onsubmitBtnClickHnd = (e: any) => {
        e.preventDefault()
        const data:Employee = {
            id: Math.random(),
            firstName: firstName,
            lastname: lastName,
            email: email
        }
        onSubmitClickHnd(data)
        onBackBtnClickHnd();
    }
    return <>
        <div className="">
            <h3>Add Employee Form</h3>
        </div>
        <div className="form-wrapper">
            <form action="" onSubmit={onsubmitBtnClickHnd}>
                <div className="">
                    <label htmlFor="">First Name :</label>
                    <input type="text" required className='input-form' value={firstName} onChange={onFirstNameChangeHnd}/>
                </div>
                <div className="">
                    <label htmlFor="">Last Name :</label>
                    <input type="text" required className='input-form' value={lastName} onChange={onLastNameChangeHnd}/>
                </div>
                <div className="">
                    <label htmlFor="">Email :</label>
                    <input type="email" required className='input-form' value={email} onChange={onEmailChangeHnd}/>
                </div>
                <div className="btn-wrapper">
                    <button className="" type="button" onClick={onBackBtnClickHnd}>Back</button>
                    <button className="" type="submit">Submit</button>
                </div>
            </form>
        </div>

            </>;
}; export default AddEmployee;