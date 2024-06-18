import { BuilderContentComponent } from "@/components/builder/BuilderContentComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex-row p-24">
      <div className="">
        <div className="flex">
          <h1 className="text-lg">Next.js Builder Example</h1>
          {/* <ul>
            <li>
              <Link href="category/category-123">Example Category</Link>
            </li>
            <li>
              <Link href="product/product-123">Example Product</Link>
            </li>
          </ul> */}
        </div>

        <BuilderContentComponent />
      </div>
    </main>
  );
}
