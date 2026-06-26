import Link from "next/link";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { auth } from "@/auth";
import { singOutUser } from "@/lib/actions/user.actions";

export default async function UserButton() {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">Account</Link>
      </Button>
    );
  }
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative rounded-md ml-2 flex items-center justify-center"
            >
              {session.user?.name}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={singOutUser} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-end"
                variant="ghost"
              >
                Exit
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
