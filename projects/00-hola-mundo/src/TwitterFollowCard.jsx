export function TwitterFollowCard({ userName, name }) {
  // console.log(isFollowing);
  // const addAt = (userName) => `@${userName}`
  const imagenDev = `https://unavatar.io/${userName}`;

  return (
    <article className="tw-fb-article-followed">
      <header className="tw-fb-article-header">
        <img
          className="tw-fb-article-img"
          alt="Avatar ExampleTwitter"
          src={imagenDev}
        />
        <div className="tw-fb-article-header-info">
          <strong>{name}</strong>
          <span className=".tw-fb-article-header-span">@(userName)</span>
        </div>
      </header>

      <aside>
        <button className="tw-fb-article-button">Seguir</button>
      </aside>
    </article>
  );
}
