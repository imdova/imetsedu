import UserHeader from "@/components/users/userHeader";
import UsersList from "@/components/users/usersList";
import { getUsers } from "@/lib/actions/user/user.actions";

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
