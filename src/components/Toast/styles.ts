import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import toastConfig from "../../configs/toastConfig";


export const Styles:any = styled.div`
`;


export const StyledToastContainer = styled(ToastContainer).attrs({
  ...toastConfig,
})`
  .Toastify__toast--error {
    background: #ab4b4b;
    color: ${({ theme }) => theme.colors.one};
    font-size: 15px;
    justify-self: center;
    font-weight: 600;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #f37370;
    }
  }

  .Toastify__toast--success {
    background: #4d9144;
    color: ${({ theme }) => theme.colors.one};
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #7bf370;
    }
  }

  .Toastify__toast--warning {
    background: #aba94b;
    color: ${({ theme }) => theme.colors.one};
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #f3ef70;
    }
  }
`;
