import styles from './error.module.css'; 
import { useTranslation } from "react-i18next";
function ErrorMessage() {
  const { t } = useTranslation("common");
  return (
    <div>
    <p className={styles.errorText}>
    {t("error.ErrorMessage_Area")}</p> 
  </div>
  );
}

export default ErrorMessage;
