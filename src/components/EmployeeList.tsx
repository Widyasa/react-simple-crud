import './style.css'
import {Employee} from "./Employee";
import ModalEmployee from "./ModalEmployee";
type Props = {
    list : Employee[];
    onDeleteClickHnd: (data: Employee) => void
}
const EmployeeList = (props:Props) => {
    const {list, onDeleteClickHnd} = props;
    // const onDeleteBtnClick = (data:Employee) => {
    //
    // }
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
                                    <input type="button" value="view"/>
                                    <input type="button" value="edit"/>
                                    <input type="button" value="delete" onClick={() => onDeleteClickHnd(employee)} />
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>

            </table>
            <ModalEmployee />
        </div>

    )
}; export default EmployeeList