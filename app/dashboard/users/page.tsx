import { getUsers } from "@/lib/actions/user/user.actions";
import UsersList from "./usersList";
import UserHeader from "./userHeader";

const page = async () => {
  const users = await getUsers();

  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col gap-5 p-5">
        <UserHeader />
        <UsersList users={users} />
      </div>
    </div>
  );
};

export default page;
