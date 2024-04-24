import styles from "./user-account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faEllipsisVertical,
    faPlus,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, BookmarkIcon, Button, EventCard, EventCardIcon, EventCardDetails, Tab, TabList, TabPanel, CardMenu } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCardImage from "../../components/EventCardImage";

const tabs = [
    { id: 1, label: "my events" },
    { id: 2, label: "happened" },
    { id: 3, label: "cancelled" },
    { id: 4, label: "saved" }
];

const imageUrl = `https://s3-alpha-sig.figma.com/img/699d/1183/8d9716e61a45f9e95043b56334473c19?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ4xRYD3OvMQM-9CYNL9jNLYbACRF-T7yDNBW904td9Y3hw6WnzRARE8iebdaW0X930VG0s~eD2FQ1h4DCy2Oyly9ajQBeGkpdN1XR2zXRCaVt~n7NxYtdEORMyqYq18Q6q1a6jEUGdnxBtA2Z22UaPKHK4BxrifO3PYCqr6MTLMnmggWE3VnSVBu751JDB2WwyUKbV~vLOmFdoeeWENxxirrIP-3d6agV5darB9BgxV31VawN6DNPJ8YKYSg4vURbetFmbTJCxmHkkbq8TnfKgUwxs3x0aLmo8Op1BtBLNcz7rPc8fgZGQZFBkQS~6U8hZ1n3E1w66OIELE4Mn7kA__`;

function UserAccount() {
    const [activeTab, setActiveTab] = useState("my events");

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.user}>
                <Avatar src="" />
                <p>Username</p>
                <Button>
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    Logout
                </Button>
                <Button>
                    <FontAwesomeIcon icon={faTrashCan} />
                    Delete Account
                </Button>
            </div>
            <section className={styles.events}>
                <header>
                    <p>Events</p>
                    <Button onClick={() => navigate("/create")}>
                        <span>Add Event</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </header>
                <TabList handleClick={setActiveTab}>
                    {tabs.map(tab => (
                        <Tab key={tab.id} activeTab={activeTab} tab={tab} />
                    ))}
                </TabList>
                <TabPanel
                    label="my events"
                    activeTab={activeTab}
                >
                    {Array.from(
                        { length: 4 },
                        (_, i) => `My Event ${i + 1}`
                    ).map((event) => (
        <EventCard key={event}>
          <EventCardIcon onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
                                    {isMenuVisible && <CardMenu />}
          </EventCardIcon>
          <EventCardImage src={imageUrl} />
          <EventCardDetails name={event} date={"Event Date"} />
        </EventCard>
      ))}

                </TabPanel>
                <TabPanel
                    label="happened"
                    activeTab={activeTab}
                >
{Array.from({ length: 4 },(_, i) => `Cancelled ${i + 1}`).map((event) => (
        <EventCard key={event}>
          <EventCardIcon onClick={() => setIsBookmarked(!isBookmarked)}>
            <BookmarkIcon isBookmarked={isBookmarked} />
          </EventCardIcon>
          <EventCardImage src={imageUrl} />
          <EventCardDetails name={event} date={"Event Date"} />
        </EventCard>
      ))}

                </TabPanel>
                <TabPanel
                    label="cancelled"
                    activeTab={activeTab}
                >
{Array.from({ length: 4 },(_, i) => `My Event ${i + 1}`).map((event) => (
        <EventCard key={event}>
          <EventCardIcon onClick={() => setIsBookmarked(!isBookmarked)}>
            <BookmarkIcon isBookmarked={isBookmarked} />
          </EventCardIcon>
          <EventCardImage src={imageUrl} />
          <EventCardDetails name={event} date={"Event Date"} />
        </EventCard>
      ))}

                </TabPanel>
                <TabPanel
                    label="saved"
                    activeTab={activeTab}
                >
{Array.from({ length: 4 },(_, i) => `My Event ${i + 1}`).map((event) => (
        <EventCard key={event}>
          <EventCardIcon onClick={() => setIsBookmarked(!isBookmarked)}>
            <BookmarkIcon isBookmarked={isBookmarked} />
          </EventCardIcon>
          <EventCardImage src={imageUrl} />
          <EventCardDetails name={event} date={"Event Date"} />
        </EventCard>
      ))}

                </TabPanel>
            </section>
        </div>
    );
}

export default UserAccount;
