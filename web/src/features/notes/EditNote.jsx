import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import { useGetNotesQuery } from "./notesApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";

import EditNoteForm from "./EditNoteForm";
import { is } from "immer/dist/internal";

const EditNote = () => {
  const { id } = useParams();

  const { username, isManager, isAdmin } = useAuth();

  const { note } = useGetNotesQuery("notesList", {
    selectFromResult: ({ data }) => {
      note: data?.entities[id];
    },
  });

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => {
      users: data?.ids.map(id => data?.entities[id]);
    },
  });

  if (!note || !users?.length) return <PulseLoader color={"#fff"} />;

  if (!isManager && !isAdmin) {
    if (note.username !== username) {
      return <p className="errmsg">No access</p>;
    }
  }

  const content = <EditNoteForm note={note} users={users} />;

  return content;
};
export default EditNote;
