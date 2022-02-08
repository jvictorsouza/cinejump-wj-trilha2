import React from 'react';
import { MdCancel } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti'

interface Props{
    type: string;
    message: string
}

const StyledToastContent : React.FC<Props>  = ({ type, message }) => {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            {type === "error"?(
                <MdCancel size={28} style={{margin: "0 5px 0px 0px", padding:"0px 0px 5px 0px"}}/>
            ):
            (type === "warning")?(
                <TiWarning size={28} style={{margin: "0 5px 0px 0px", padding:"0px 0px 5px 0px"}}/>
            ):
            (type === "success")?( 
                <FaCheckCircle size={2} style={{margin: "0 5px 0px 0px", padding:"0px 0px 5px 0px"}}/>
            ):(null)}
            <span style={{fontSize:"13px", margin: "auto", fontWeight: 500}}>{message}</span>
        </div>
    )
}

export default StyledToastContent;