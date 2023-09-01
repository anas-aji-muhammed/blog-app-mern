import styles from './WrapContainer.module.scss'
const WrapContainer = ({ children }) => {
    return <div className={styles.wrapContainer}>{children}</div>;
};

export default WrapContainer;


