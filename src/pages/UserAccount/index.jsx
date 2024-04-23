import styles from "./user-account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faPlus,
    faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button, Tab, TabList, TabPanel } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
    { id: 1, label: "my events" },
    { id: 2, label: "happened" },
    { id: 3, label: "cancelled" },
    { id: 4, label: "saved" }
];

function UserAccount() {
    const [activeTab, setActiveTab] = useState("my events");
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
                    events={Array.from(
                        { length: 4 },
                        (_, i) => `My Event ${i + 1}`
                    )}
                />
                <TabPanel
                    label="happened"
                    activeTab={activeTab}
                    events={Array.from(
                        { length: 4 },
                        (_, i) => `Happened ${i + 1}`
                    )}
                />
                <TabPanel
                    label="cancelled"
                    activeTab={activeTab}
                    events={Array.from(
                        { length: 4 },
                        (_, i) => `Cancelled ${i + 1}`
                    )}
                />{" "}
                <TabPanel
                    label="saved"
                    activeTab={activeTab}
                    events={Array.from(
                        { length: 4 },
                        (_, i) => `Saved ${i + 1}`
                    )}
                />
            </section>
        </div>
    );
}

export default UserAccount;
