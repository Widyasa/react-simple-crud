import './style.css'
import {useState} from "react";
import {dummyEmployeeList, Employee, PageEnum} from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import addEmployee from "./AddEmployee";

const Home = () => {
    const [employeeList, setEmployeeList] = useState(dummyEmployeeList as Employee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
    };
    const shownListPage = () => {
        setShownPage(PageEnum.list);
    };
    const addEmployeeHnd = (data:Employee) => {
        setEmployeeList([...employeeList, data]);
    };
    const deleteEmployee = (data:Employee)=> {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];
        tempList.splice(indexToDelete, 1);
        setEmployeeList(tempList)
    }
    return( <>
            <article className='article-header'>
                <header>
                    <h1>React: Simple CRUD Application</h1>
                </header>
            </article>

            <section>
                <div className="section-content">
                    {shownPage === PageEnum.list && (
                        <>
                            <article>
                                <h3>Employee List</h3>
                            </article>
                            <button type="button" onClick={onAddEmployeeClickHnd}  className="btn-add">Add Employee</button>
                            <EmployeeList list={employeeList} onDeleteClickHnd={deleteEmployee}/>
                        </>
                    )}
                    {
                        shownPage === PageEnum.add && <AddEmployee
                            onBackBtnClickHnd={shownListPage}
                            onSubmitClickHnd={addEmployeeHnd}

                        />
                    }

                </div>
            </section>
        </>
    )
}; export default Home;