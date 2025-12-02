import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  // 開発者ツールのコンソールで確認
  console.log("document.cookie:", document.cookie); // i18next=ja-JP などがあるか
  console.log("localStorage.getItem:", localStorage.getItem("i18nextLng"));
  console.log("sessionStorage.getItem:", sessionStorage.getItem("i18nextLng")); // sessionStorage もチェック
  console.log("navigator.languages:", navigator.languages);
  console.log("document.documentElement.lang:", document.documentElement.lang); // HTML タグの lang 属性

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "太郎" })}</p>
    </div>
  );
}

export default App;
