"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { singInWithCrendentials } from "@/lib/actions/user.actions";
import { Input } from "@/components/ui/input";

export default function SignInForm() {
  const [data, action] = useActionState(singInWithCrendentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("calbackUrl") || "/";
  return (
    <>
      <form action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl}/>
        <div className="space-y-6">
          <Label htmlFor="email" className="mb-2">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
          <div>
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="password"
            />
          </div>
          <div>
            <Button className="w-full" variant="default">
              Enter
            </Button>
          </div>
          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}
          <div className="text-sm text-center">
            <Link href="/sign-up">Anmelden</Link>
          </div>
        </div>
      </form>
    </>
  );
}
