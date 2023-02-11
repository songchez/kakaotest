import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>카카오테스트</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
