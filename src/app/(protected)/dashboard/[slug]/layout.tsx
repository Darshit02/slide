import InfoBar from "@/components/global/info-bar";
import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  //WIP : QueryClient for prefetching

  return (
    <div className="p-3">
      <Sidebar slug={params.slug} />
      <div
        className="
        lg:ml-[250px] 
        lg:pl-10 
        lg:py-5 
        flex 
        flex-col 
        overflow-auto
        "
      >
        <InfoBar slug={params.slug} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
