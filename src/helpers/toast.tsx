import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ToastContent from '../components/Toast/content'

export type ToastStatusType = 'success' | 'warnning' | 'error'

export const ToastError = (textContent: string) =>
  toast.error(<ToastContent type="error" message={textContent} />)

export const ToastSucess = (textContent: string) =>
  toast.success(<ToastContent type="success" message={textContent} />)

export const ToastWarning = (textContent: string) =>
  toast.warning(<ToastContent type="warning" message={textContent} />)

export const RenderAToast = (status: ToastStatusType, message: string) => {
  if (status === 'error') ToastError(message)
  else if (status === 'success') ToastSucess(message)
  else if (status === 'warnning') ToastWarning(message)
}
