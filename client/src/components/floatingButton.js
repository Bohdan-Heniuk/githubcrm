import React from 'react';

const FloatingButton = ({setModal}) => {
    return (
        <div onClick = {() => setModal(true)} style={{
            position : "fixed",
            right : "5%",
            bottom : "10%"
        }}>
            <a className="btn btn-floating btn-large waves-effect waves-light red">+</a>
        </div>
    );
};

export default FloatingButton;