import Head from "next/head";

export default function Base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>카카오테스트</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
