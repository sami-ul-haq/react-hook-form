"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Form = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const submitHandler = (data) => {
    console.log(data);
    router.push("/thank-you");
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-center text-2xl">React Hook Form</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-row mb-2">
          <label htmlFor="fullname" className="font-semibold block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            className="border border-black rounded-sm px-4 py-2 w-full focus:outline-none"
            {...register("fullname", {
              required: {
                value: true,
                message: "Full name required",
              },
              minLength: {
                value: 2,
                message: "Min 2 Char",
              },
              maxLength: {
                value: 10,
                message: "Max 10 Char",
              },
            })}
          />
          {errors.fullname && (
            <span className="text-red-800">{errors.fullname.message}</span>
          )}
        </div>
        <div className="form-row mb-2">
          <label htmlFor="phone" className="font-semibold block mb-1">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            placeholder="Phone Number"
            className="border border-black rounded-sm px-4 py-2 w-full focus:outline-none"
            {...register("phone", {
              required: "Phone Number is Required",
              minLength: {
                value: 10,
                message: "Min 10 numbers",
              },
              maxLength: {
                value: 11,
                message: "Max 11 numbers",
              },
            })}
          />
          {errors.phone && (
            <span className="text-red-800">{errors.phone.message}</span>
          )}
        </div>
        <div className="form-row mb-2">
          <label htmlFor="email" className="font-semibold block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Here"
            className="border border-black rounded-sm px-4 py-2 w-full focus:outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter valid Email",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-800">{errors.email.message}</span>
          )}
        </div>
        <div className="form-row mb-2">
          <label className="font-semibold block mb-1">Gender</label>
          <div className="radio-row">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="mr-2"
              {...register("gender", { required: true })}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="radio-row">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="mr-2"
              {...register("gender", { required: true })}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className="radio-row">
            <input
              type="radio"
              id="others"
              name="gender"
              value="others"
              className="mr-2"
              {...register("gender", { required: true })}
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="form-row mb-2">
          <label htmlFor="state" className="font-semibold block mb-1">
            Select State
          </label>
          <select
            id="state"
            {...register("state", { required: "Select Your State" })}
            className="border border-black rounded-sm px-4 py-2 w-full focus:outline-none"
          >
            <option value="">Select State</option>
            <option value="punjab">Punjab</option>
            <option value="sindh">Sindh</option>
            <option value="balochistan">Balochistan</option>
            <option value="gilgit">Gilgit</option>
          </select>
          {errors.state && (
            <span className="text-red-800">{errors.state.message}</span>
          )}
        </div>
        <div className="form-row mb-2 ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: "Must Accept Terms" })}
              className="border border-black mr-2"
            />
            <label htmlFor="terms" className="font-semibold block mb-1 mt-1">
              I accept terms & conditions
            </label>
          </div>
          <div>
            {errors.terms && (
              <span className="text-red-800">{errors.terms.message}</span>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="border border-black rounded-sm px-6 py-2 hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
