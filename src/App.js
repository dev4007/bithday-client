import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./common/Loader";
import Dashboard from "./pages/admin/Dashboard";
import ScheduledWishes from "./pages/admin/ScheduledWishes";
import WishDetails from "./pages/admin/WishDetails";
import WishesHistory from "./pages/admin/WishesHistory";
import Customers from "./pages/admin/Customers.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              {/* Additional components or setup can go here */}
              <Dashboard />
            </>
          }
        />
        <Route path="/scheduledwishes" element={<ScheduledWishes />} />
        <Route path="/wishdetails/:id" element={<WishDetails />} />
        <Route path="/wishdetails/:id" element={<WishDetails />} />
        <Route path="/wisheshistory" element={<WishesHistory />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
