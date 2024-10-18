import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import store from "./reducers/store.js"
import { getPosts } from "./actions/post.action.js";
import { getUser } from "./actions/user.action.js";


// Config Redux
const storeRedux = configureStore({
  reducer: store,
  devTools:true, //Active le plugin DevTools//
})

storeRedux.dispatch(getPosts())
storeRedux.dispatch(getUser())
//

const router = createBrowserRouter([
  {
    element: (
      <Provider store={storeRedux}>
        <App />
      </Provider>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
