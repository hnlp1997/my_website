import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout.js";
import { capitalizeFirstLetter } from "../components/layout.js";
import { useRouter } from "next/router";

// Dynamic age calculation (Pacific Time safe)
function getAge() {
  const now = new Date();

  // Convert to Pacific Time
  const nowPT = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );

  const birthYear = 2001; // May 17, 2001
  const birthdayThisYear = new Date(
    `${nowPT.getFullYear()}-05-17T00:00:00`
  );

  let age = nowPT.getFullYear() - birthYear;

  if (nowPT < birthdayThisYear) {
    age -= 1;
  }

  return age;
}

export default function About() {
  const router = useRouter();

  return (
    <Layout>
      <div className={utilStyles.container}>
        <div className="overflow-y-clip">
          <Head>
            <link
              rel="icon"
              href="https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png"
            />
            <title>
              {capitalizeFirstLetter(router.pathname.replace("/", ""))}
            </title>
            <meta name="description" content="Welcome to Nam's Website!" />
          </Head>

          <main className={utilStyles.headingMd}>
            <h1 className="text-3xl font-bold flex flex-col w-full lg:mb-8 mb-4 text-center lg:pt-12 pt-0">
              About Me
            </h1>

            <img
              src="/hi.jpeg"
              alt="Hoang-Nam LuuPham"
              height="275"
              width="275"
              className="text-center mx-auto transform rounded-lg lg:hidden mb-4 lg:mb-0"
            />

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-4xl items-start max-w-xs pb-24">
              <div className="prose prose-p:text-[16px] prose-ul:text-[15px] w-full text-left dark:prose-invert">
                <p>
                  My name is <span className="font-bold">Nam</span>, nice to meet
                  you! I’m {getAge()} years old and was born and raised in San
                  Jose, CA. In my free
                  time, I love learning Spanish, watching anime, DJ'ing, playing
                  racket sports, building puzzles, thrifting, and spending time
                  with my friends and family. Life is Good! •‿•
                </p>

                <p className="flex underline">
                  Here are some fun facts about me:
                </p>

                <ul className="list-disc list-inside">
                  <li className="-ml-2">
                    "LuuPham" is a combination of my parents' last names
                  </li>
                  <li className="-ml-2">
                    NMIXX, TWICE, G Jones, Bladee, & Porter Robinson
                  </li>
                  <li className="-ml-2">
                    Favorite anime: K-ON!, Ouran, Ping Pong, Kaguya-sama
                  </li>
                  <li className="-ml-2">
                    I sell clothes on my
                    {" "}
                    <a
                      href="https://www.ebay.com/usr/xailai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      eBay
                    </a>
                     and{" "}
                    <a
                      href="https://www.grailed.com/xailai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Grailed
                    </a>{" "}
                    !
                  </li>
                </ul>
              </div>

              <img
                src="/hi.jpeg"
                alt="Hoang-Nam LuuPham"
                height="400"
                width="400"
                className="text-center mx-auto transform rounded-lg hidden lg:block"
              />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
