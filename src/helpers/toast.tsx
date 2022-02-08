import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastContent from '../components/Toast/content'

export const ToastError = (textContent:string) => toast.error(<ToastContent type="error" message={textContent}/>);
export const ToastSucess = (textContent:string) => toast.success(<ToastContent type="success" message={textContent}/>);
export const ToastWarning = (textContent:string) => toast.warning(<ToastContent type="warning" message={textContent}/>);
