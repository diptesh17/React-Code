import AdminInfo from "./Components/AdminInfo";
import UserInfo from "./Components/UserInfo";
import { Info, AdminInfoList } from "./types";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Dip"
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Sumit",
    role: "admin"
  };

  return (
    <>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </>
  );
};

export default App;
