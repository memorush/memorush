import MainLayout from "./layouts/main.layout";
import MainPage from "./pages/main/main-page/main.page";
import DashboardPage from "./pages/dashboard/dashboard-page/dashboard.page";
import CardSetList from "./pages/dashboard/dashboard-components/card-set-list/card-set-list.component";
import Settings from "./pages/dashboard/dashboard-components/settings/settings.component";
import CardSetForm from "./pages/dashboard/dashboard-components/card-set-form/card-set-form.component";
import SignIn from "./pages/main/main-components/sign-in/sign-in.component";
import SignUp from "./pages/main/main-components/sign-up/sign-up";
import NotFound from "./pages/not-found/not-found.page";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="main" element={<MainPage />}>
            <Route path="registration" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="page-not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="page-not-found" replace />} />
          </Route>
          <Route path="dashboard" element={<DashboardPage />}>
            <Route path="card-set" element={<CardSetList />} />
            <Route path="card-set/create" element={<CardSetForm />} />
            <Route path="card-set/folders" element={<CardSetForm />} />
            <Route path="card-set/favorites" element={<CardSetForm />} />
            <Route path="card-set/recently" element={<CardSetForm />} />
            <Route path="settings" element={<Settings />} />
            <Route path="page-not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="page-not-found" replace />} />
          </Route>
          <Route path="page-not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="page-not-found" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
