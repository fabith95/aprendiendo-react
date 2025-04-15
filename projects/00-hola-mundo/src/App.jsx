import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="app">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        name="Miguel Duran"
      />
      <TwitterFollowCard userName="x/kikobeats" name="ExampleSonic" />
    </section>
  );
}
