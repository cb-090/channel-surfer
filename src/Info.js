import ShowCard from "./ShowCard";

export default function Info({ name, data, num }) {
  return !data || (!name && num == 0) ? (
    <p></p>
  ) : !data ? (
    <p>No data for {name}</p>
  ) : Object.prototype.toString.apply(data) == "[object Array]" ? (
    <ul className="showList">
      {data.map((item, index) => (
        <ShowCard show={item.show} key={index} />
      ))}
    </ul>
  ) : (
    <ShowCard show={data} />
  );
}
