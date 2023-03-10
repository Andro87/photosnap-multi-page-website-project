import Head from "next/head";
import styles from "@/styles/Home.module.scss";

import { DM_Sans } from "@next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

import { Header, Layout, StoryPicture, Tool, Footer } from "components";

import { layout } from "data/home_layout_data";
import { stories } from "data/stories_home";
import { tools } from "data/home_tools";

export default function Home() {
    const mainLayout = layout.map((layout, index) => (
        <Layout
            key={index}
            small={layout.small}
            medium={layout.medium}
            large={layout.large}
            header={layout.header}
            paragraph={layout.paragraph}
            theme={layout.theme}
            direction={layout.direction}
            title={layout.title}
            getInvite={true}
        />
    ));

    const homeStories = stories.map((story, index) => (
        <StoryPicture
            key={index}
            large={story.picture.desktop}
            small={story.picture.mobile}
            header={story.header}
            author={story.author}
        />
    ));

    const homeTools = tools.map((tool, index) => (
        <Tool
            key={index}
            icon={tool.icon}
            header={tool.header}
            paragraph={tool.paragraph}
        />
    ));
    return (
        <div className={dmSans.className}>
            <Head>
                <title>Frontend Mentor | Photosnap Website Challenge</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/assets/favicon-32x32.png" />
            </Head>

            <Header />

            <main className={styles.main}>{mainLayout}</main>
            <section aria-label="stories" className={styles.section_stories}>
                {homeStories}
            </section>
            <section aria-label="tools" className={styles.section_tools}>
                <div className={styles.tools_container}> {homeTools}</div>
            </section>
            <Footer />
        </div>
    );
}
