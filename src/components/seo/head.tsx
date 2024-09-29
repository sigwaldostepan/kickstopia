import NextHead from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
};

const Head = ({ title = "The Ultimate Destination For Top Sneakers", description = "" }: HeadProps) => {
  const defaultTitle = "Kickstopia";
  
  return (
    <NextHead>
      <title>{title + " | " + defaultTitle}</title>
      <meta name="description" content={description} />
    </NextHead>
  );
};

export default Head;
