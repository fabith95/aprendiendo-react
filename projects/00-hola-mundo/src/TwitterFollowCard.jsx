import { useState } from "react";

export function TwitterFollowCard({ userName, children }) {
  //Uso de children en componentes
  // console.log(isFollowing);
  // const addAt = (userName) => `@${userName}`

  const [isFollowing, setIsFollowing] = useState(false); //manejo de STATE HOOK

  const imagenDev = `https://unavatar.io/${userName}`;

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing //RENDERIZADO CONDICIONAL(ternaria)
    ? "tw-fb-article-button is-Following"
    : "tw-fb-article-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-fb-article-followed">
      <header className="tw-fb-article-header">
        <img
          className="tw-fb-article-img"
          alt="Avatar ExampleTwitter"
          src={imagenDev}
        />
        <div className="tw-fb-article-header-info">
          <strong>{children}</strong>
          <span className=".tw-fb-article-header-span">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
