import { Routes, Route } from "react-router-dom";

import useTitle from "./hooks/useTitle";

import { ROLES } from "./config/roles";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import Prefetch from "./features/auth/Prefetch";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UsersList";
import NewUserForm from "./features/users/NewUserForm";
import EditUser from "./features/users/EditUser";
import NotesList from "./features/notes/NotesList";
import NewNote from "./features/notes/NewNote";
import EditNote from "./features/notes/EditNote";

function App() {
  useTitle("Dan D. Repairs");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                  }
                >
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path="new" element={<NewUserForm />} />
                    <Route path=":id" element={<EditUser />} />
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path="new" element={<NewNote />} />
                  <Route path=":id" element={<EditNote />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
