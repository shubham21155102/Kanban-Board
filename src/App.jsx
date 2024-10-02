import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DisplayProvider } from "./context/DisplayContext"; // Provides display context.
import Controls from "./components/Controls/Controls"; // Control panel component.
import Board from "./components/Board/Board"; // Main board display component.
import DemoBoard from "./components/Board/DemoBoard"; // Demo Board component.
import NotFound from "./components/NotFound"; // 404 Not Found component (you can create this).

const App = () => {
    return (
        <Router>
            <DisplayProvider>
                {/* Wraps UI components with display context */}
                <Controls /> {/* User interface for display settings */}
                <Routes>
                    <Route path="/" element={<Board />} /> {/* Default route */}
                    <Route path="/demo" element={<DemoBoard />} /> {/* Route to DemoBoard */}
                    <Route path="*" element={<NotFound />} /> {/* Route for 404 */}
                </Routes>
            </DisplayProvider>
        </Router>
    );
};

export default App; // Exports App for use in index.js as the root component.
