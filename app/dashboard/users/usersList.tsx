"use client";

import DynamicForm from "@/components/form/dynamicForm";
import Modal from "@/components/Modal";
import { deleteUser, updateUser } from "@/lib/actions/user/user.actions";
import { FieldConfig } from "@/types";
import { Pen, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// name
// email
// password
// image
const editFields: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    type: "text", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Name" },
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Email Address" },
    required: true,
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "image",
    label: "Image",
    type: "text", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Add Image Link For that user" },
    validation: {
      pattern: {
        value:
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
        message: "Invalid image link",
      },
    },
  },
];

const UsersList: React.FC<{ users: UserType[] }> = ({ users }) => {
  const session = useSession();
  const currentUser = session.data?.user;

  const [isEdit, setEdit] = useState<UserType | null>(null); //  user id
  const [isDelete, setDelete] = useState<UserType | null>(null); //  user id

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleEditSubmit(data: UserType) {
    setLoading(true);
    const result = await updateUser(data);
    if (result.success) {
      setEdit(null);
    } else {
      setError(result.message);
    }
    setLoading(false);
  }
  async function handleDeleteSubmit(data: UserType) {
    setLoading(true);
    const result = await deleteUser(data);
    if (result.success) {
      setDelete(null);
    } else {
      setError(result.message);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <Modal isOpen={!!isEdit} onClose={() => setEdit(null)}>
        <DynamicForm
          fields={editFields}
          onClose={() => setEdit(null)}
          onSubmit={handleEditSubmit}
          initialValues={{ ...isEdit }}
          loading={loading}
          error={error}
        />
      </Modal>
      <Modal isOpen={!!isDelete} onClose={() => setDelete(null)}>
        <DynamicForm
          fields={[]}
          onClose={() => setDelete(null)}
          onSubmit={handleDeleteSubmit}
          initialValues={{ ...isDelete }}
          title="Remove User"
          description="Are you sure that you want to remove the user?"
          submitButtonText="Remove"
          submitButtonTextColor="error"
          loading={loading}
          error={error}
        />
      </Modal>
      {users.map((user) => (
        <div
          key={user._id}
          className={`${user.email === currentUser?.email ? "border-gold" : ""} flex items-center justify-start gap-4 rounded-3xl border bg-white p-4 text-primary shadow-simple`}
        >
          <div className="h-14 w-14">
            <Image
              src={user.image || "/images/placeholder.jpg"}
              alt="image"
              width={56}
              height={56}
              className="aspect-square min-h-14 min-w-14 rounded-full border border-gray-300 object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold">{user.name}</p>
            <Link
              href={`mailto:${user.email}`}
              className="break-all text-sm hover:underline"
            >
              {user.email}
            </Link>
          </div>
          <div className="flex">
            <button
              onClick={() => setDelete(user)}
              className="rounded-full p-2 transition-colors hover:bg-red-100 hover:text-red-500"
            >
              <Trash size={16} />
            </button>
            <button
              onClick={() => setEdit(user)}
              className="rounded-full p-2 transition-colors hover:bg-gray-200 hover:text-primary"
            >
              <Pen size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
