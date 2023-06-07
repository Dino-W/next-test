import axios from "axios";

export async function getStaticPaths() {
  const res = await axios.get(
    "http://test.zoonobet.com/editor?limit=999&pageNumber=1"
  );
  const data = res.data;

  const paths = data.data.map((editor) => ({
    params: { _id: editor._id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://test.zoonobet.com/editor/${params._id}`);
  const editorData = res.data;

  return {
    props: { editorData },
    revalidate: 60, // ISR with 1 minute
  };
}

export default function Editor({ editorData }) {
  return (
    <div>
      <h1>{editorData.title}</h1>
      <p>Categories: {editorData.categories.name}</p>
      <p>Tags: {editorData.tags.map((tag) => tag.name).join(", ")}</p>
      {editorData.scheduledAt && <p>Scheduled At: {editorData.scheduledAt}</p>}
      <div dangerouslySetInnerHTML={{ __html: editorData.htmlContent }} />
    </div>
  );
}
