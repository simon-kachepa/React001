import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"

export default function SignUp(){
    const form = useForm();
    const { register, control } = form;
    // const {name, ref, onChange, onBlur} = register("username");

    return (
        <div>
            <form>

                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Username" 
                    // name={name} ref={"ref"} onChange = {onChange} onBlur={onBlur}
                    {...register("username")}
                />
                <br /><br />

                <label htmlFor="name">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="abc@gmail.com" 
                    // name="email"
                    {...register("email")}
                />
                <br /><br />

                <label htmlFor="name">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="**********" 
                    // name="password"  
                    {...register("password")}
                />
                <br /><br />

                <button type="submit" name="submit" id="submit">submit</button>
            </form>
            <DevTool control={control} />
        </div>
    );
}