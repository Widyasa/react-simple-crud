import './style.css'
import {useState} from "react";
import {dummyEmployeeList, Employee, PageEnum} from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Home = () => {
    const [employeeList, setEmployeeList] = useState(dummyEmployeeList as Employee[])
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
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
                            <input type="button" value="add employee" onClick={onAddEmployeeClickHnd}/>
                            <EmployeeList list={employeeList} />
                        </>
                    )}
                    {shownPage === PageEnum.add && <AddEmployee />}
                </div>
            </section>
        </>
    )
}; export default Home;