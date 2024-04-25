import { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";


const TextInput = ({ type, name, placeholder, required, onInvalid, onInput }) => {
     const [showPassword, setShowPassword] = useState(false);

     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
     };

     return (
          <div className="relative">
               <input type={showPassword ? "text" : type} name={name} placeholder={placeholder} required={required} onInvalid={onInvalid} onInput={onInput} className="w-full flex text-primary-default text-sm md:text-base uppercase rounded-10 border border-white outline-none p-10 pr-12 placeholder:text-primary-default" />
               {type === "password" && (
                    <button onClick={togglePasswordVisibility} type="button"
                         className="absolute inset-y-0 right-0 flex items-center pe-4">
                         {showPassword ? (
                              <FiEye className="text-primary-default font-bold" />
                         ) : (
                              <FiEyeOff className="text-primary-default font-bold" />
                         )}
                    </button>
               )}
          </div>
     );
};

TextInput.propTypes = {
     type: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     placeholder: PropTypes.string.isRequired,
     required: PropTypes.bool,
     onInvalid: PropTypes.func,
     onInput: PropTypes.func
};

export default TextInput;
