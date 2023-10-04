"use client";
import React, { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import TermsCheckbox from '../../components/TermsCheckbox'

const SignUp = () => {

    const validationSchema = Yup.object().shape({
      email: Yup.string().required("email is required").email("email is invalid"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, 'Phone must contain numbers only')
        .length(12, 'Phone must be exactly 12 digits'),
      name: Yup.string().required("name is required"),
      surname: Yup.string().required("Surname is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 characters"),
      city: Yup.string().required("Please enter your city")
    })
    const formOptions = { resolver: yupResolver(validationSchema)};

    //get funcs to build form with useform
    const {register, handleSubmit, formState } = useForm(formOptions);
    const {errors } = formState;

    function onSubmit(e){
        //fetch with URL
    }
    return(
        <div className="h-screen w-screen bg-gradient-to-r from-cyan-300 to-purple-300 pt-3 ">
            
            {/*Image on top of page*/}
            <div className="relative w-full h-1/4">
                <div
                    className="bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/zimpraise.png')" }}
                >
                    <h2 className="font-bold text-4xl border border-gray-300 rounded-full bg-white px-6 py-3 mt-7 mb-12 md:mt-13">
                    Sign Up
                    </h2>
                </div>
            </div>
            
            {/*Container*/}
            <div className="flex justify-center">
                <div className="shrink-1 container h-full  border border-gray-800 px-8  rounded-md bg-white">
                    <h3 className="font-bold bg-gray-200 m-4 px-5">Add Your Personal Info</h3>
                    <form className="border p-4" onSubmit={handleSubmit(onSubmit)} id="reset">            
                            {/*add data*/}
                            <div className='name flex flex-col justify-between'>
                            <label htmlFor="name" className="font-bold">Enter Your Name</label>
                            <input
                                {...register("name")}
                                className="form-input  outline outline-1 px-2"
                                type="text"
                                placeholder="Name"
                            />
                            <div className="text-red-500 ml-2 mb-4">{errors.name?.message}</div>
                            </div>
                            <div className='surname flex flex-col  justify-between'>
                                <label htmlFor="surname" className="font-bold">Enter Your Surname</label>
                                <input
                                    {...register("surname")}
                                    className="form-input  outline outline-1 px-2"
                                    type="text"
                                    placeholder="Name"
                                />
                                <div className="text-red-500 ml-2 mb-4">{errors.surname?.message}</div>
                            </div>
                            <div className='email flex flex-col  justify-between'>
                                <label htmlFor="email" className="font-bold"> Enter Your E-mail</label>
                                <input
                                    {...register("email")}
                                    className="form-input outline outline-1 px-2"
                                    type="email"
                                    placeholder="Email"
                                />
                                <div className="text-red-500 ml-2 mb-4 ">{errors.email?.message}</div>
                            </div>
                            <div className='phone flex flex-col  justify-between'>
                                <label htmlFor="phone" className="font-bold">Phone Number</label>
                                <input
                                    {...register("phone")}
                                    className="form-input outline outline-1 px-2"
                                    type="text"
                                    placeholder="phone"
                                />
                                <div className="text-red-500 ml-2  mb-4">{errors.phone?.message}</div>
                            </div>
                            <div className='city flex flex-col  justify-between'>
                                <label htmlFor="city" className="font-bold">Enter Your City</label>
                                <input
                                    {...register("city")}
                                    className="form-input  outline outline-1 px-2"
                                    type="text"
                                    placeholder="City"
                                />
                                <div className="text-red-500 ml-2 mb-4">{errors.city?.message}</div>
                            </div>
                            <div className='password flex flex-col  justify-between'>
                                <label htmlFor="password" className="font-bold">Enter Password</label>
                                <input
                                    {...register("password")}
                                    className="form-input outline outline-1 px-2"
                                    type="password"
                                    placeholder="**********************"
                                />
                                <div className="text-red-500 ml-2 mb-4">{errors.password?.message}</div>
                            </div>
                            {/*Select gender*/}
                            <div className='flex flex-row  justify-between'>
                                <label for="sex" className="font-bold">Sex:</label>
                                <select name="sex" id="sex">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="nullsex">Prefer Not To Say</option>
                                </select>
                            </div>
                            <div className=" flex justify-center flex-col">
                                <button
                                    className="mb-3 flex justify-center form-button bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:from-purple-500 hover:to-cyan-500 py-2 px-8 mt-4 rounded-full flex justify end"
                                    type="submit">
                                    Sign Up
                                </button>

                            </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;