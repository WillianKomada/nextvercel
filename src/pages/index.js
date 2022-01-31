import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deploy Next App</title>
        <meta
          name="description"
          content="Como criar um deploy na Vercel com um projeto NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Como publicar um app criado com NextJS.
        </h1>

        <ol className={styles.listContainer}>
          <li className={styles.listItem}>
            Publicar um app criado com NextJS;
          </li>
          <li className={styles.listItem}>
            Criar um app - yarn create next-app nextvercel;
          </li>
          <li className={styles.listItem}>Entrar no site da Vercel;</li>
          <li className={styles.listItem}>Acessar a conta;</li>
          <li className={styles.listItem}></li>
          <li className={styles.listItem}></li>
        </ol>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
