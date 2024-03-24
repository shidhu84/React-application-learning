import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import categories from "./Categories";

interface Props {
  onAddExpense: (data: FormData) => void;
}
const schema = z.object({
  description: z
    .string()
    .min(3, {
      message: "Description should not be less than 5 charactors!!",
    })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required!!" })
    .min(0.01, { message: "Amount should not be less than 20!!" })
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "category is Required",
    }),
  }),
});
type FormData = z.infer<typeof schema>;

function AddExpense({ onAddExpense }: Props) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onAddExpense)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select"
        >
          <option value="uncatogorized">Please Select</option>
          <option value="groceries">Groceries</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AddExpense;
