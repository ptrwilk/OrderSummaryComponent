import { Box, Button, Link, Typography } from "@mui/material";
import styles from "./styles.module.css";
import IllustrationHero from "../assets/illustration-hero.svg";
import { ReactComponent as IconMusic } from "../assets/icon-music.svg";

const OrderSummaryComponent = () => {
  return (
    <Box className={styles["container"]}>
      <img src={IllustrationHero} />
      <Box className={styles["content"]}>
        <Typography variant="h1">Order Summary</Typography>
        <Typography className={styles["text"]}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Typography>
        <Box className={styles["plan"]}>
          <IconMusic />
          <Typography className={styles["title"]} variant="h2">
            Annual Plan
            <span className={styles["price"]}>$59.99/year</span>
          </Typography>
          <Link href="#">Change</Link>
        </Box>
        <Button className={styles["btn-proceed"]}>Proceed to Payment</Button>
        <Button className={styles["btn-cancel"]}>Cancel Order</Button>
      </Box>
    </Box>
  );
};

export default OrderSummaryComponent;
