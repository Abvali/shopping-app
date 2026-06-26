import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="flex justify-between items-center flex-1 max-w-7xl p-5 px-10 w-full mx-auto">
        <div className="flex justify-start items-center ">
          <Link href="/">
            <span>logo</span>
            <span className="block font-bold text-2xl mr-3">Shop</span>
          </Link>
        </div>
        <div className="space-x-2">
          <ThemeToggle />
          <Button>
            <Link href="/cart" className="flex gap-2">
              <ShoppingCart />
              Warenkorb
            </Link>
          </Button>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
