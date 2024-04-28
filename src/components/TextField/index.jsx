import clsx from "clsx";
import useInput from "../../hooks/useInput";
import PropTypes from "prop-types"
import styles from "./text-field.module.css"

function TextField({ label, type, id, placeholder, icon, className, showLabel}){
    const [value, setValue] = useInput()

    const wrapperStyle = clsx({
        [styles.wrapper]: true,
        [className]: className
    })
    return (
        <div className={wrapperStyle}>
            <label htmlFor={id} className={showLabel ? "" : "visuallyhidden"}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            {icon && <span>{icon}</span>}
        </div>
    )
}

export default TextField

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.element,
    className: PropTypes.object,
    showLabel: PropTypes.bool,
}
