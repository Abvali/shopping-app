import Link from "next/link";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { auth } from "@/auth";

import SingInForm from "./SignInForm";

async function SingInPage(props: {
  searchParams: Promise<{ callback: string }>;
}) {
  const { callback } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callback || "/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center m-auto">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <Link href="/">zurück</Link>
          <CardTitle className="text-center">Anmelen</CardTitle>
          <CardDescription className="text-center">
            got to Account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SingInForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default SingInPage;
