"use client";

import Image from "next/image";
import type { Recipe } from "@/data/recipes";

export function Recette({ recipe }: { recipe: Recipe }) {
  return (
    <article className="a4-sheet border border-stone-200 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
      <div className="px-8 py-6 sm:px-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {recipe.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#8ca992]/50 bg-[#f4f7f2] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-700">
                {recipe.servings} personnes
              </span>
              <span className="rounded-full border border-[#8ca992]/50 bg-[#f4f7f2] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-700">
                {recipe.prepTime}
              </span>
            </div>
          </div>

          <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem] border border-[#8ca992]/50 bg-[#f4f7f2]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          <section className="">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-700">
              Ingrédients
            </h2>
            <ul className="mt-4 space-y-2.5">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="flex items-start gap-3 text-sm leading-6 text-stone-700"
                >
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-[#8ca992]"
                    aria-hidden="true"
                  />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-700">
              Préparation
            </h2>

            <ol className="space-y-2">
              {recipe.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 border-b border-stone-200 pb-2"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8ca992] text-[10px] font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-stone-700">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </article>
  );
}
