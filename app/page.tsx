import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/data/recipes";
import RecettePreview from "@/components/RecettePreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-10 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50">
              <Image src="/logo/logo.svg" alt="Logo Les Zozos Recettes" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                Les Zozos Recettes
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-stone-900">
                Des recettes simples et gourmandes
              </h1>
            </div>
          </div>

          <Link
            href="/recettes"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Voir les recettes
          </Link>
        </header>

      </div>
    </main>
  );
}
