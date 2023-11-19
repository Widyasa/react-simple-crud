import './style.css'
import {useEffect, useState} from "react";
import {dummyEmployeeList, Employee, PageEnum} from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import addEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
    const [employeeList, setEmployeeList] = useState(dummyEmployeeList as Employee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as Employee);

    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList");
        if (listInString) {
            _setEmployeeList(JSON.parse(listInString));
        }
    }, []);
    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
    };
    const shownListPage = () => {
        setShownPage(PageEnum.list);
    };
    const _setEmployeeList = (list: Employee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem("EmployeeList", JSON.stringify(list));
    };
    const addEmployeeHnd = (data:Employee) => {
        _setEmployeeList([...employeeList, data]);
    };
    const deleteEmployee = (data:Employee)=> {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];
        tempList.splice(indexToDelete, 1);
        _setEmployeeList(tempList)
    }
    const editEmployeeData = (data: Employee) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };
    const updateData = (data: Employee) => {
        const filteredData = employeeList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = employeeList.indexOf(filteredData);
        const tempData = [...employeeList];
        tempData[indexOfRecord] = data;
        _setEmployeeList(tempData);
    };

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
                            <EmployeeList list={employeeList}
                                          onDeleteClickHnd={deleteEmployee}
                                          onEdit={editEmployeeData}/>
                        </>
                    )}
                    {
                        shownPage === PageEnum.add && <AddEmployee
                            onBackBtnClickHnd={shownListPage}
                            onSubmitClickHnd={addEmployeeHnd}

                        />
                    }
                    {shownPage === PageEnum.edit && (
                        <EditEmployee
                            data={dataToEdit}
                            onBackBtnClickHnd={shownListPage}
                            onUpdateClickHnd={updateData}
                        />
                    )}
                </div>
            </section>
        </>
    )
}; export default Home;