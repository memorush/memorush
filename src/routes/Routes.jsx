import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import CardSetForm from "../pages/dashboard/components/card-set-form/card-set-form.component";
import CardSetList from "../pages/dashboard/components/card-set-list/card-set-list.component";
import CardMemorize from "../pages/dashboard/components/card-set/card-memorize/card-memorize.component";
import CardSet from "../pages/dashboard/components/card-set/card-set.component";
import FlashCardList from "../pages/dashboard/components/card-set/flash-card-list/flash-card-list.component";
import Settings from "../pages/dashboard/components/settings/settings.component";
import DashboardPage from "../pages/dashboard/dashboard.page";
import AuthForm from "../pages/main/components/auth-form/auth-form.component";
import MainPage from "../pages/main/main.page";
import NotFound from "../pages/not-found/not-found.page";
import RequireAuthRoute from "../wrapper/RequireAuthRoute";
import InfoComponent from "../pages/dashboard/components/info/info.component";

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {/* TODO Переделать тут роутинг */}
      <Route index element={<MainPage />} />
      <Route path="main" element={<MainPage />}>
        <Route path="auth" element={<AuthForm />} />
        <Route path="page-not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Route>
      <Route element={<RequireAuthRoute />}>
        <Route path="dashboard" element={<DashboardPage />}>
          <Route path="info" element={<InfoComponent />} />
          <Route path="card-set-list" element={<CardSetList />} />
          <Route path="card-set-list/:cardSetId" element={<CardSet />}>
            <Route path="list" element={<FlashCardList />} />
            <Route path="memorize" element={<CardMemorize />} />
          </Route>
          <Route path="card-set-create" element={<CardSetForm />} />
          <Route path="card-set-edit" element={<CardSetForm />} />
          <Route path="card-set-folders" element={<CardSetForm />} />
          <Route path="card-set-favorites" element={<CardSetForm />} />
          <Route path="card-set-recently" element={<CardSetForm />} />
          <Route path="settings" element={<Settings />} />
          <Route path="page-not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="page-not-found" replace />} />
        </Route>
      </Route>
      <Route path="page-not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="page-not-found" replace />} />
    </Route>
  </Routes>
)

export default ApplicationRoutes;