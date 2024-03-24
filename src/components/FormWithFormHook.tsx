import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

function FormWithFormHook() {
  const { register, handleSubmit } = useForm();
  console.log(register("name"));
  const submit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
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
