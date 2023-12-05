import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { PropsWithChildren } from "react";
import { store } from "../store";

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};
