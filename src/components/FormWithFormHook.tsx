import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
    name: string,
    age: number
}

function FormWithFormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(register("name"));
  const submit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field Required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name field have minimum 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default FormWithFormHook;
