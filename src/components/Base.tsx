import Head from "next/head";

export default function Base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="카카오테스트테스트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </>
  );
}
