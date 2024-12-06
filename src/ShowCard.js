import ShowSummary from "./ShowSummary";

export default function ShowCard({ show }) {
  return (
    <li className="showCard">
      <h2>{show.name}</h2>
      <img
        src={
          !show.image?.medium
            ? "https://anitagrocery.in/web-assets/images/product/large/no-img.jpg"
            : show.image?.medium
        }
      />
      <section className="info">
        <p>{`Genres: ${show.genres}`}</p>
        <p>
          {!show.language ? "Language: None" : `Language: ${show.language}`}
        </p>
      </section>
      <section className="runtime">
        <p>{`Premiered: ${show.premiered}`}</p>
        <p>{!show.ended ? "Ongoing" : `Ended: ${show.ended}`}</p>
        <p>{`Last Episode: ${show._links?.previousepisode?.name}`}</p>
      </section>
      <ShowSummary summary={show.summary} />
    </li>
  );
}
