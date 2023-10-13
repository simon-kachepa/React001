import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"

export default function SignUp(){
    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    // const {name, ref, onChange, onBlur} = register("username");

    const onSubmit = (data) =>{
        console.log("Form submitted", data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Username" 
                    // name={name} ref={"ref"} onChange = {onChange} onBlur={onBlur}
                    {...register("username", {
                        required: 
                        {
                            value: true,
                            message: "Name is required"
                        }
                        })}
                />
                <p>{errors.username?.message}</p>
                <br /><br />

                <label htmlFor="name">Email: </label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="abc@gmail.com" 
                    // name="email"
                    {...register("email", {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        },
                        validate: {
                            notAdmin: (fieldValue)=>{
                                return (
                                    fieldValue !== "admin@example.com" || "Enter a different email"
                                );
                            },
                            notBlacklisted: (fieldValue)=>{
                                return (
                                    !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                                );
                            },
                        },
                    })}
                />
                <p>{errors.email?.message}</p>
                <br /><br />

                <label htmlFor="name">Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="**********" 
                    // name="password"  
                    {...register("password", {
                        required: 
                        {
                            value: true,
                            message: "Password required"
                        }
                        })}
                />
                <p>{errors.password?.message}</p>
                <br /><br />

                <button type="submit" name="submit" id="submit">submit</button>
            </form>
            <DevTool control={control} />
        </div>
    );
}