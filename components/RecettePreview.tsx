import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/data/recipes";

export default function RecettePreview({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recettes/${recipe.id}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-200 hover:-translate-y-0.5"
    >
      <article key={recipe.id} className="h-full">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-stone-900">{recipe.title}</h2>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-800">
              <span>{recipe.prepTime}</span>
            </span>
          </div>

          <p className="text-sm text-stone-600">{recipe.description}</p>

          <span className="inline-flex text-sm font-medium text-amber-700 underline-offset-4 transition group-hover:underline">
            Découvrir la recette
          </span>
        </div>
      </article>
    </Link>
  );
}
