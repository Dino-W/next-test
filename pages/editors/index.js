import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const res = await axios.get(
    "http://test.zoonobet.com/editor?limit=999&pageNumber=1"
  );
  const data = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 60, // ISR with 1 second
  };
}

export default function Editors({ data }) {
  const [editors, setEditors] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      setEditors(data.data);
    }
  }, [data]);

  return (
    <div>
      {editors.map((editor, index) => (
        <div key={index}>
          <Link href={`/editors/${editor._id}`}>
            <h2>{editor.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
