import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UsersList";
import EditUserForm from "./features/users/EditUserForm";
import NewUserForm from "./features/users/NewUserForm";
import NotesList from "./features/notes/NotesList";
import EditNoteForm from "./features/notes/EditNoteForm";
import NewNoteForm from "./features/notes/NewNoteForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path=":id" element={<EditUserForm />} />
            <Route path="new" element={<NewUserForm />} />
          </Route>

          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path=":id" element={<EditNoteForm />} />
            <Route path="new" element={<NewNoteForm />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
