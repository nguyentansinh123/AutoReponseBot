import MainNavBar from "@/components/global/MainNavBar/MainNavBar";
import Sidebar from "@/components/global/sidebar/sidebar";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/lib/Fetching/prefetch";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const query = new QueryClient();

  await PrefetchUserProfile(query);
  await PrefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex h-screen bg-black">
        <div className="flex-shrink-0">
          <Sidebar id={params.id} />
        </div>
        <div className="flex-1 p-6 overflow-auto">
          <MainNavBar id={params.id} />
          <main>{children}</main>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default layout;
