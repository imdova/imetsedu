"use client";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import PhoneNumberInput from "./phoneNumberInput";
import { useState } from "react";

const ApplicationForm: React.FC<{ close: () => void }> = ({ close }) => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      program: "",
    },
  });

  async function onSubmit(data: {
    name: string;
    phone: string;
    program: string;
  }) {
    setLoading(true);
    try {
      console.log("🚀 ~ ApplicationForm ~ data:", data.phone);
      const response = await fetch("https://sheetdb.io/api/v1/7wwkfi1cusx1s", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: data.name,
              phone: data.phone,
              program: data.program,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      // const data = await response.json();
      // console.log(data);
      // toast.success("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
      // toast.error("Failed to update data. Please try again.");
    } finally {
      setLoading(false);
      close();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full text-left "
      noValidate
    >
      <div className="flex flex-col space-y-2">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <CustomInput
              {...field}
              label="Full Name"
              placeholder="Enter Full name"
              id="firstName"
              error={errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          }}
        />
      </div>

      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <PhoneNumberInput
            {...field}
            placeholder="+20 (10) 0000-0000"
            id="phone"
            type="tel"
            error={errors.phone?.message}
            helperText={errors.phone?.message}
          />
        )}
        rules={{
          required: "Phone number is required",
          minLength: {
            value: 10,
            message: "Phone number must be at least 10 characters",
          },
        }}
      />
      <Controller
        control={control}
        name="program"
        render={({ field }) => (
          <CustomSelect
            {...field}
            label="Program"
            placeholder="Select a program"
            id="program"
            options={[
              {
                label: "Program 1",
                value: "program1",
              },
              {
                label: "Program 2",
                value: "program2",
              },
            ]}
            error={errors.program?.message}
            helperText={errors.program?.message}
          />
        )}
        rules={{
          required: "Program selection is required",
        }}
      />

      <button
        type="submit"
        className="w-full  flex items-center justify-center py-4 px-4 text-sm font-medium text-white bg-gold rounded-md shadow-sm hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold/50 transition-all duration-150 ease-in-out"
      >
        {loading ? "Loading..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplicationForm;
