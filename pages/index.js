import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>這是首頁</h1>
      <Link href="/editors">前往所有文章</Link>
    </Layout>
  );
}
