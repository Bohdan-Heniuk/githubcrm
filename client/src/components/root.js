import React, {useEffect, useState} from 'react';
import FloatingButton from "./floatingButton";
import Modal from "./modal";
import {useDispatch, useSelector} from "react-redux";
import {deleteRepos, getRepos, updateRepos} from "../redux/actions/repos";
import {MdDelete, MdSystemUpdateAlt} from "react-icons/all";
import Navbar from "./navbar";

const Root = () => {
    const [modal, setModal] = useState(false)
    const repos = useSelector(state => state.repos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <>
            {modal && <Modal setModal={setModal}/>}
            <div className='container'>
            <Navbar/>
                <table className="table centered">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Project Owner</th>
                        <th scope="col">Project Name</th>
                        <th scope="col">project URL</th>
                        <th scope="col">Stars</th>
                        <th scope="col">Forks</th>
                        <th scope="col">Issues</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody style={{fontSize: "12px"}}>
                    {repos.map((repo, index) => {
                        return <tr key={repo.id}>
                            <th scope="row">{++index}</th>
                            <td>{repo.project_owner}</td>
                            <td>{repo.project_name}</td>
                            <td>{repo.project_url}</td>
                            <td>{repo.stars}</td>
                            <td>{repo.forks}</td>
                            <td>{repo.issues}</td>
                            <td>{repo.created_at}</td>
                            <td>
                                <MdSystemUpdateAlt style={{
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    marginRight: "5px"
                                }} onClick={() => dispatch(updateRepos(repo.id))}
                                />
                                <MdDelete style={{
                                    fontSize: "16px",
                                    cursor: "pointer"
                                }} onClick={() => dispatch(deleteRepos(repo.id))}/>
                            </td>
                        </tr>
                    })}

                    </tbody>
                </table>
            </div>

            <FloatingButton setModal={setModal}/>
        </>
    );
};

export default Root;