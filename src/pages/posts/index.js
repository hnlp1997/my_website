import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link"
import Layout from "../../components/layout"

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

export default function Postpage({ allPostsData }) {
  return (
    <Layout>
      <div className='center'>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className='text-center  font-extrabold text-3xl'>✌️ Blog Posts:</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
            {formatDate(date)}
            </small>
          </li>
        ))}
      </ul>
    </section>
    </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
