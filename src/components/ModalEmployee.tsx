import './style.css'
import {Employee} from "./Employee";
type Props = {
    modalClose : () => void
    data: Employee
}
const ModalEmployee = (props: Props) => {
    const {modalClose, data} = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={modalClose}>&times;</span>
                <div className="">
                    <h3>employee data</h3>
                    <div className="">
                        <div className="label-modal">
                            <label htmlFor="">First Name : {data.firstName}</label>
                            <label htmlFor="">Last Name : {data.lastname}</label>
                            <label htmlFor="">Email : {data.email}</label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default ModalEmployee