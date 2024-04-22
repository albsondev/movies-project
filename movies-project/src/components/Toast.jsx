import {BiBell} from "react-icons/bi";

const Toast = ({ message, timer, title }) => {
    const timerContent = timer ? <small>{timer}</small> : null;

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div className="toast fade show" role="alert">
                <div className="toast-header">
                    <div className={'botaoEstilizado'}>
                        <BiBell/>
                    </div>
                    <strong className="me-auto ms-4">
                        {title}
                    </strong>
                    {timerContent}
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Toast;
