import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const TostifyStiled = styled(ToastContainer)`
  .toast {
    color: ${({ theme }) => theme.color.softBackgroundColor};
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    font-size: ${({ theme }) => theme.typography.textSize};

    .Toastify__progress-bar {
      background-color: #c6d6c9;
    }

    .Toastify__close-button {
      color: ${({ theme }) => theme.color.softBackgroundColor};
    }

    &--success {
      background-color: ${({ theme }) => theme.color.successColor};
      -ms-progress-appearance: bar;

      .Toastify__progress-bar {
        background-color: #c6d6c9;
      }
    }

    &--error {
      background-color: ${({ theme }) => theme.color.errorColor};

      .Toastify__progress-bar {
        background-color: #f0bdbd;
      }
    }
  }
`;

export default TostifyStiled;
