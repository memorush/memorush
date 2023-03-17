import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main/main.layout";
import CardSetFormPage from "../pages/dashboard/card-set-form/card-set-form.page";
import CardSetListPage from "../pages/dashboard/card-set-list/card-set-list.page";
import CardSetListIdPage from "../pages/dashboard/card-set-list-id/card-set-list-id.page";
import CardListPage from "../pages/dashboard/card-set-list-id/pages/card-list/card-list.page";
import SettingsPage from "../pages/dashboard/settings/settings.page";
import DashboardPage from "../layouts/dashboard/dashboard.layout";
import AuthFormComponent from "../pages/main/components/auth-form/auth-form.component";
import MainPage from "../pages/main/main.page";
import NotFoundPage from "../pages/not-found/not-found.page";
import RequireAuthRoute from "../wrapper/RequireAuthRoute";
import InfoPage from "../pages/dashboard/info/info.page";
import SearchPage from "../pages/dashboard/search/search.page";
import FoundCardSetDetailsPage from "../pages/dashboard/found-card-set-details/found-card-set-details.page";
import TipPage from "../pages/dashboard/card-set-list-id/pages/tip/tip.page";
import TrainerPage from "../pages/dashboard/card-set-list-id/pages/trainer/trainer.page";
import PrivacyPolicyPage from "../pages/privacy-policy/privacy-policy.page";
import TermOfUsePage from "../pages/term-of-use/term-of-use.page";

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {/* TODO Переделать тут роутинг */}
      <Route index element={<MainPage />} />
      <Route path="main" element={<MainPage />}>
        <Route path="auth" element={<AuthFormComponent />} />
        <Route path="page-not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Route>
      <Route element={<RequireAuthRoute />}>
        <Route path="dashboard" element={<DashboardPage />}>
          <Route path="info" element={<InfoPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="found-card-set-details/:id" element={<FoundCardSetDetailsPage />} />
          <Route path="found-card-set" element={<SearchPage />} />
          <Route path="card-set-list" element={<CardSetListPage />} />
          <Route path="card-set-list/:cardSetId" element={<CardSetListIdPage />}>
            <Route path="card-list" element={<CardListPage />} />
            <Route path="tip" element={<TipPage />} />
            <Route path="trainer" element={<TrainerPage />} />
          </Route>
          <Route path="card-set-create" element={<CardSetFormPage />} />
          <Route path="card-set-edit" element={<CardSetFormPage />} />
          <Route path="card-set-folders" element={<CardSetFormPage />} />
          <Route path="card-set-favorites" element={<CardSetFormPage />} />
          <Route path="card-set-recently" element={<CardSetFormPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="page-not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="page-not-found" replace />} />
        </Route>
      </Route>
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="term-of-use" element={<TermOfUsePage />} />
      <Route path="page-not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="page-not-found" replace />} />
    </Route>
  </Routes>
)

export default ApplicationRoutes;
