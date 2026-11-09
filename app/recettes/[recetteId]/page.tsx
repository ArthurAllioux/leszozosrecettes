import {Recette} from "@/components/Recette";
import {recipes} from "@/data/recipes";

export default async function RecipesPage({
  params,
}: {
  params: Promise<{ recetteId: string }>;
}) {
  const { recetteId } = await params;
  const recette = Object.values(recipes).find((recipe) => recipe.id === recetteId);

  if (!recette) {
    return null;
  }

  return <Recette recipe={recette} />;
}