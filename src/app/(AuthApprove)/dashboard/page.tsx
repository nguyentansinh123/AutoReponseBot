import { onboardUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {};

async function Page({}: Props) {
  const user = await onboardUser();

  if (user.status === 200 || user.status === 201) {
    return redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }

  return redirect("/login");
}

export default Page;
