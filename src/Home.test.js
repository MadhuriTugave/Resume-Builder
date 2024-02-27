import {render} from "@testing-library/react";
import Home from "./components/Home";
import { Provider } from 'react-redux';
import {store} from "./Redux/store"

import {BrowserRouter} from  "react-router-dom";

const renderWithRedux =(component)=>{
    return {
      ...render(
        <BrowserRouter> 
        <Provider store={store}>
           {component}
          </Provider>
          </BrowserRouter>
      )
    }
}
it('should have heading as Templates',() => {
  const {getByTestId}=renderWithRedux(<Home/>);
  expect(getByTestId("Heading")).toHaveTextContent("Templates");
 
})
