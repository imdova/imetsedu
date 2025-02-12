"use client";
import DynamicForm from "@/components/form/dynamicForm";
import Modal from "@/components/Modal";
import { addUser } from "@/lib/actions/user/user.actions";
import { FieldConfig } from "@/types";
import { useState } from "react";

const addUserField: FieldConfig<UserType>[] = [
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
    name: "password",
    label: "Password",
    type: "email", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Create a password for this user" },
    required: true,
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

const UserHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(data: UserType) {
    setLoading(true);
    const result = await addUser(data);
    if (result.success) {
      closeModal();
    } else {
      setError(result.message);
    }
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-between">
      <Modal isOpen={isOpen} onClose={closeModal}>
        <DynamicForm
          fields={addUserField}
          onClose={closeModal}
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
      </Modal>
      <h1 className="text-3xl font-bold">Users</h1>
      <button
        onClick={openModal}
        className="transform self-end text-nowrap rounded-2xl bg-gold px-4 py-2 text-white shadow-md duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Add New User
      </button>
    </div>
  );
};

export default UserHeader;
