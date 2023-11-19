import './style.css'
import {Employee} from "./Employee";
type Props = {
    list : Employee[]
}
const EmployeeList = (props:Props) => {
    const {list} = props;
    return (
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
                                <input type="button" value="delete"/>
                            </td>
                        </tr>
                    )
                }
            )}
            </tbody>

        </table>
    )
}; export default EmployeeList