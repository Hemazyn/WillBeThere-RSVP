import styles from "./avatar.module.css";

function Avatar({ src, className }) {
  return (
    <div className={`${className} ${styles.avatar}`}>
      <img src={src} alt="" />
    </div>
  );
}

export default Avatar;
