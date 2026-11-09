import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/data/recipes";
import RecettePreview from "@/components/RecettePreview";

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-10 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50">
              <Image src="/logo/logo.svg" alt="Logo Les Zozos Recettes" fill className="object-cover" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-700">
                Les Zozos Recettes
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-stone-900">Nos recettes</h1>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
          >
            Retour à l’accueil
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(recipes).map(([id, recipe]) => (
            <RecettePreview key={id} recipe={recipe} />
          ))}
        </section>
      </div>
    </main>
  );
}
