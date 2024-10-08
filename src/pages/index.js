import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import useSWR from "swr";
import { useState } from "react";

export default function Home({ allPostsData }) {
  return (
    <>
    <Head>
      <title>HN</title>
        </Head>
      <Layout home>
        <section className=" text-[0.95rem] lg:text-[1.05rem] leading-6 mx-auto  px-7  mb-32">
          <p className=" max-w-lg text-center justify-center pt-0 mb-24">
            Welcome, please feel free to call me{" "}
            <strong>Nam</strong>! Thanks for checking out my site; click on the "Camera" button for new pics. Feel free to contact me via my{" "}
            <a href="mailto:hnluupham@gmail.com">email</a> if you ever have any questions! 💙
          </p>
        </section>
      </Layout>
      </>
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
