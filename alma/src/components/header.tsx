import { Box, Link } from "@chakra-ui/react";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>ALMA</h1>
        </Link>
      </header>
    </>
  );
};
