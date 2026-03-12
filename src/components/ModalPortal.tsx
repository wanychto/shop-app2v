import React from 'react'
import ReactDOM from 'react-dom';

const ModalPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const modalRoot = document.getElementById('modal-root') || (() => {
        const div = document.createElement('div');
        div.id = 'modal-root';
        document.body.appendChild(div);
        return div;
    })();

    return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;