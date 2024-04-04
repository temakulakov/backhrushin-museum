import styles from './Ticket.module.scss';
import { motion } from "framer-motion";
import CardList from "../../components/Cards/CardList";

const TicketPage = () => {
    return <motion.div className={styles.container}>
        <CardList/>
    </motion.div>
};

export default TicketPage;