import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path="/" element={<HomePage />} />
        </ReactDomRoutes>
    );
}

export default Routes;