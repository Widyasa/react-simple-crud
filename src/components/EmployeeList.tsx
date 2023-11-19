import './style.css'
import {Employee} from "./Employee";
import ModalEmployee from "./ModalEmployee";
import {useState} from "react";
type Props = {
    list : Employee[];
    onDeleteClickHnd: (data: Employee) => void;
    onEdit: (data: Employee) => void;
}
const EmployeeList = (props:Props) => {
    const {list, onDeleteClickHnd, onEdit} = props;
    const [showModal, setShowMoal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as Employee | null)
    const viewEmployee = (data : Employee) => {
        setDataToShow(data)
        setShowMoal(true)
    }
    const closingModal = () => setShowMoal(false)

    return (
        <div>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {list.map((employee) => {
                        return(

                            <tr key={employee.id}>
                                <td>{`${employee.firstName} ${employee.lastname}`}</td>
                                <td>{employee.email}</td>
                                <td className='button-wrapper'>
                                    <input type="button" value="view" onClick={() => viewEmployee(employee)}/>
                                    <input type="button" value="edit" onClick={() => onEdit(employee)}/>
                                    <input type="button" value="delete" onClick={() => onDeleteClickHnd(employee)} />
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>

            </table>
            {showModal && dataToShow !== null && (<ModalEmployee modalClose={closingModal} data={dataToShow}/>)}

        </div>

    )
}; export default EmployeeList