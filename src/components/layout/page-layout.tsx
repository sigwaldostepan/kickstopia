import * as React from "react";

import Head from "../seo/head";
import Navbar from "~/components/ui/navbar";

type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const PageLayout = ({
  children,
  title,
  description,
}: PageLayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <Navbar />
      <main className="container mt-16 flex flex-col items-center py-6">
        {children}
      </main>
    </>
  );
};
