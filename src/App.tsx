import Router from "./routes/Router";
import { store } from "./components/redux/store.ts";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;
