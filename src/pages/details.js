import Link from "next/link";

const people = [
  { v: "car", name: "Lucas" },
  { v: "bike", name: "Maty" },
  { v: "truck", name: "Miguel" },
  { v: "airplane", name: "Cande" },
];
const Details = () => {
  return (
    <div>
      {people.map((e) => (
        <div>
          <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
            <a>
              Navigate a {e.name}'s {e.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Details;
