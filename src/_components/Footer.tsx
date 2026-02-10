import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ps}>
        <p>本サイトは、特定の関係者のみに向けた個人的・非商用目的の非公式ファンサイトです。</p>
        <p>掲載されている画像・名称・データ等の権利は、 株式会社ポケモン、任天堂、ゲームフリーク等の 各権利者に帰属します。</p>
        <p>本サイトは商用目的での利用を意図していません。</p>
      </div>
    </footer>
  );
}
