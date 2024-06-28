export default function Home() {
  return (
    <>
      {process.env.NEXT_PUBLIC_ENV}
      <img src="/next.svg" alt="Next.js"/>
    </>
  );
}
