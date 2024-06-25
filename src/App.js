import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./common/Loader";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import AuthRoutes from "./components/routes/AuthRoutes";

// Lazy-loaded components
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ScheduledWishes = lazy(() =>
  import("./pages/admin/wishes/ScheduledWishes")
);
const WishDetails = lazy(() => import("./pages/admin/wishes/WishDetails"));
const WishesHistory = lazy(() => import("./pages/admin/wishes/WishesHistory"));
const Customers = lazy(() => import("./pages/admin/customer/Customers"));
const ViewCustomer = lazy(() => import("./pages/admin/customer/ViewCustomer"));
const Artists = lazy(() => import("./pages/admin/artist/Artists"));
const ViewArtist = lazy(() => import("./pages/admin/artist/ViewArtist"));
const TransactionHistory = lazy(() =>
  import("./pages/admin/transactionHistory/TransactionHistory")
);
const Notifications = lazy(() =>
  import("./pages/admin/notification/Notifications")
);
const ViewNotification = lazy(() =>
  import("./pages/admin/notification/ViewNotification")
);
const Settings = lazy(() => import("./pages/admin/settings/Settings"));
const Register = lazy(() => import("./pages/auth/Register"));
const LoginPage = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgetPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/sign-up" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<AuthRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/schedule-wishes" element={<ScheduledWishes />} />
              <Route path="/wish/:id" element={<WishDetails />} />
              <Route path="/wishes-history" element={<WishesHistory />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:id" element={<ViewCustomer />} />
              <Route path="/artist" element={<Artists />} />
              <Route path="/artist/:id" element={<ViewArtist />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/notification/:id" element={<ViewNotification />} />
              <Route path="/history" element={<TransactionHistory />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
