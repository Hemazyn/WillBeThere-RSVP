import PropTypes from "prop-types";
import styles from "./event-card.module.css";

const imageUrl = `https://s3-alpha-sig.figma.com/img/699d/1183/8d9716e61a45f9e95043b56334473c19?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ4xRYD3OvMQM-9CYNL9jNLYbACRF-T7yDNBW904td9Y3hw6WnzRARE8iebdaW0X930VG0s~eD2FQ1h4DCy2Oyly9ajQBeGkpdN1XR2zXRCaVt~n7NxYtdEORMyqYq18Q6q1a6jEUGdnxBtA2Z22UaPKHK4BxrifO3PYCqr6MTLMnmggWE3VnSVBu751JDB2WwyUKbV~vLOmFdoeeWENxxirrIP-3d6agV5darB9BgxV31VawN6DNPJ8YKYSg4vURbetFmbTJCxmHkkbq8TnfKgUwxs3x0aLmo8Op1BtBLNcz7rPc8fgZGQZFBkQS~6U8hZ1n3E1w66OIELE4Mn7kA__`;

function EventCard({ event, Icon }) {
  return (
    <article className={styles.card}>
      {Icon}
      <img src={imageUrl} alt="" loading="lazy" />
      <div className={styles.details}>
        <h2>{event}</h2>
        <p>Event date</p>
      </div>
    </article>
  );
}

EventCard.propTypes = {
  event: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
};

export default EventCard;
