import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const TostifyStiled = styled(ToastContainer)`
  .toast {
    color: ${({ theme }) => theme.color.softBackgroundColor};
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    font-size: ${({ theme }) => theme.typography.textSize};

    &--success {
      background-color: ${({ theme }) => theme.color.successColor};
      -ms-progress-appearance: bar;
    }

    &--error {
      background-color: ${({ theme }) => theme.color.errorColor};
    }
  }
`;

export default TostifyStiled;
