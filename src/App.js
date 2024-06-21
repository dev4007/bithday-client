import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./common/Loader";
import Dashboard from "./pages/admin/Dashboard";
import ScheduledWishes from "./pages/admin/Wishes/ScheduledWishes.js";
import WishDetails from "./pages/admin/Wishes/WishDetails.js";
import WishesHistory from "./pages/admin/Wishes/WishesHistory.js";
import Customers from "./pages/admin/customer/Customers.js";
import { Provider } from "react-redux";
import store from "./store"; // import the Redux store
import View from "./pages/admin/customer/ViewCustomer.js";
import Artist from "./pages/admin/artist/Artists.js";
import ViewArtist from "./pages/admin/artist/ViewArtist.js";
import TransactionHistory from "./pages/admin/transactionHistory/TransactionHistory.js";
import Notifications from "./pages/admin/notification/Notifications.js";
import Settings from "./pages/admin/settings/Settings.js";
import ViewNotification from './pages/admin/notification/ViewNotification';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Provider store={store}>
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
          <Route path="/customers/:id" element={<View />} />

          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/:id" element={<ViewArtist />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notification/:id" element={<ViewNotification />} />

  
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
