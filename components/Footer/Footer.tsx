import DefaultFooter from "./components/DefaultFooter";
import USFooter from "./components/USFooter";

export default function Footer() {
  if (process.env.REGION === "us") {
    return <USFooter />;
  }

  return <DefaultFooter />;
}
