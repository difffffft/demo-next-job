import Container from "./components/Container";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";

export default function Home() {
  return (
    <>
      <Container>
        <Hero></Hero>
      </Container>
      <Jobs></Jobs>
    </>
  );
}
