import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import { Route, useLocation, Routes } from "react-router-dom";
import RootLayout from "./components/root-layout";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <RootLayout>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                </Routes>
            </RootLayout>
        </AnimatePresence>
    );
};

export default App;
