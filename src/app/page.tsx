import Card from "./components/ui/Card";
import gsap from "gsap";
export default function Home() {
  const cardSetting = () => {
    // gsap.
  };

  return (
    <main>
      <Card background="linear-gradient(62deg, #FBAB7E, #F7CE68)" />
      <Card background="linear-gradient(20deg, #FF5E7E, #FF99AC)" />
      <Card background="linear-gradient(160deg, #0093E9, #80D0C7)" />
      <Card background="linear-gradient(40deg, #fd1d1d, #833ab4)" />
      <Card background="linear-gradient(20deg, black 0%, #FC00FF 100%)" />
    </main>
  );
}
