import Head from "next/head";

const Meta = ({title, description, keywords, author}) => {
  return (
    <Head>
      <meta charset="UTF-8"></meta>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="author" content={author}></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Best Online Games Collection Website',
  description: 'Play The Best Demo Games on winnerxspot Looking for some good games to kill time? Here you can find those games and you can play them for free with registration required! so start playing! start your Journey',
  keywords: 'Games, Online, Play Games',
  author: 'Chill Chill',

};


export default Meta;