import Head from 'next/head'

export function HomeLayout() {
  return (
    <>
      <Head>
        <title>Centipede</title>
        <meta name='description' content='A drag and drop HTML generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Centipede 🐛</h1>
      </main>
    </>
  )
}
