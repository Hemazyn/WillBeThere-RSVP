import styles from "./avatar.module.css";

function Avatar({src}) {
  return (
    <div className={styles.avatar}>
            <img src={src} alt="" />
        </div>
  )
}

export default Avatar
