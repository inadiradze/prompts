import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptia is AI prompting tool for modern world
      </p>
      <Feed />
    </section>
  );
};

export default Home;
