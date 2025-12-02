import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  // 開発者ツールのコンソールで確認
  console.log("document.cookie:", document.cookie); // i18next=ja-JP などがあるか
  console.log("localStorage.getItem:", localStorage.getItem("i18nextLng"));
  console.log("sessionStorage.getItem:", sessionStorage.getItem("i18nextLng")); // sessionStorage もチェック
  console.log("navigator.languages:", navigator.languages);
  console.log("document.documentElement.lang:", document.documentElement.lang); // HTML タグの lang 属性

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "太郎" })}</p>
      <div>
        <button onClick={() => changeLanguage("ja")}>日本語</button>
        <button onClick={() => changeLanguage("en")}>English</button>
      </div>
    </div>
  );
}

export default App;
