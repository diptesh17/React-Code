import { AdminInfoList } from "../types";

const AdminInfo = ({ admin }: { admin: AdminInfoList }) => {
  return (
    <div>
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Role: {admin.role}</p>
    </div>
  );
};

export default AdminInfo;
