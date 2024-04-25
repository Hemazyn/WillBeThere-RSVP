import { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";

const TextInput = ({ type, name, placeholder, required, onInvalid, onInput }) => {
     const [showPassword, setShowPassword] = useState(false);
     const [validationMessage, setValidationMessage] = useState("");

     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
     };

     const handleValidation = (e) => {
          const inputValue = e.target.value;
          if (name === "email_address") {
               const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue.trim());
               if (!isValidEmail) {
                    setValidationMessage("Please enter a valid email address");
               } else {
                    setValidationMessage("");
               }
          } else if (name === "password") {
               if (inputValue.length < 6) {
                    setValidationMessage("Password must be at least 6 characters long");
               } else {
                    setValidationMessage("");
               }
          }
     };

     return (
          <div className="relative">
               <input type={showPassword ? "text" : type} name={name} placeholder={placeholder} required={required} onInvalid={onInvalid} autoComplete="true" autoCapitalize="false"
                    onInput={(e) => { handleValidation(e); onInput && onInput(e); }}
                    className="w-full flex text-primary-default text-sm md:text-base uppercase rounded-10 border border-white outline-none p-10 pr-12 placeholder:text-primary-default" />
               {type === "password" && (
                    <button onClick={togglePasswordVisibility} type="button" className="absolute inset-y-0 right-0 flex items-center pe-4"  >
                         {showPassword ? (
                              <FiEyeOff className="text-primary-default font-bold" />
                         ) : (
                              <FiEye className="text-primary-default font-bold" />
                         )}
                    </button>
               )}
               {validationMessage && (
                    <p className="text-red text-xs text-end mt-3">{validationMessage}</p>
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
