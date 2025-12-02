import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "太郎" })}</p>
    </div>
  );
}

export default App;
