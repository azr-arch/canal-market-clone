import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, useLocation, Routes } from "react-router-dom";
import RootLayout from "./components/root-layout";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <RootLayout>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </RootLayout>
        </AnimatePresence>
    );
};

export default App;
