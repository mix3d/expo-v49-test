import { BuilderContentComponent } from "@/components/builder/BuilderContentComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-sm lg:flex">
        <div className="flex">
          <h1>Next.js Builder Example</h1>
          <ul>
            <li>
              <Link href="category/category-123">Example Category</Link>
            </li>
            <li>
              <Link href="product/product-123">Example Product</Link>
            </li>
          </ul>
        </div>

        <BuilderContentComponent />
      </div>
    </main>
  );
}
