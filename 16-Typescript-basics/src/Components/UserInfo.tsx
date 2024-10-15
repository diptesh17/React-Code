import { Info } from "../types";

const UserInfo = ({ user }: { user: Info }) => {
  return (
    <>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </>
  );
};

export default UserInfo;
