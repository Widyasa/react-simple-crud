import {Employee} from "./Employee";
import {useState} from "react";

type Props = {
    data: Employee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data:Employee) => void;
};
const EditEmployee = (props:Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;
    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastname);
    const [email, setEmail] = useState(data.email);
    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    }
    const onlastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    }
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    }
    const onSubmitBtnClickHnd = (e:any) => {
        e.preventDefault();
        const updatedData: Employee = {
            id:data.id,
            firstName: firstName,
            lastname: lastName,
            email: email
        };
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    };
    return (
        <div>
            <div className="">
                <h3>Edit Employee Form</h3>
            </div>
            <div className="form-wrapper">
                <form action="" onSubmit={onSubmitBtnClickHnd}>
                    <div className="">
                        <label htmlFor="">First Name :</label>
                        <input type="text" required className='input-form' value={firstName} onChange={onFirstNameChangeHnd}/>
                    </div>
                    <div className="">
                        <label htmlFor="">Last Name :</label>
                        <input type="text" required className='input-form' value={lastName} onChange={onlastNameChangeHnd}/>
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
        </div>
    )
}; export default EditEmployee;