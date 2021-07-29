import { MdSend} from 'react-icons/md';

import '../css/modal.css'
import {useDispatch} from "react-redux";
import useInputValue from "../hooks/useInputValue";
import {addRepos} from "../redux/actions/repos";
import {useState} from "react";
const Modal = ({setModal}) => {
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const url = useInputValue('')

    const submitHandler = async () => {
        if(!url.value()) {
            return setError('Поле не может быть пустым')
        }

        await dispatch(addRepos(url.value()))
        setModal(false)
    }

    return (
        <div className="modalWindow" >
            <div className="modal-content">
                <span className="close" onClick={() => setModal(false)}>&times;</span>
                <h3>Добавление репозитория</h3>
                <div className="submit" style={{display:"flex"}}>
                    <input {...url.bind} type="text"/>

                    <MdSend onClick={() => submitHandler()} style={{
                        fontSize : "30px",
                        cursor : "pointer"
                    }}/>
                </div>
                <small style={{color : "Red"}}>{error}</small>

            </div>

        </div>
    );
};

export default Modal;