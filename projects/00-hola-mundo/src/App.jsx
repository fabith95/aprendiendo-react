import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="app">
      <TwitterFollowCard userName="midudev" name="Miguel Duran">
        Miguel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName="x/kikobeats" name="ExampleSonic">
        Jhon Doe
      </TwitterFollowCard>
    </section>
  );
}
