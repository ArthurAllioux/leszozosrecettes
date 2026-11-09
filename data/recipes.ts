export type Recipe = {
  id: string;
  title: string;
  description: string;
  servings: number;
  prepTime: string;
  difficulty: string;
  budget: string;
  image: string;
  ingredients: string[];
  steps: string[];
};
export const recipes: Record<string, Recipe> = {
  ratatouille: {
    id: "ratatouille",
    title: "Ratatouille",
    description:
      "Le grand classique provençal, fondant et parfumé, encore meilleur réchauffé.",
    servings: 6,
    prepTime: "1 h 15",
    difficulty: "Facile",
    budget: "€€",
    image: "", // TODO: ajouter une image
    ingredients: [
      "2 aubergines",
      "3 courgettes",
      "2 poivrons (1 rouge, 1 jaune)",
      "5 tomates bien mûres",
      "2 oignons",
      "3 gousses d’ail",
      "5 c. à soupe d’huile d’olive",
      "1 bouquet garni (thym, laurier)",
      "Quelques feuilles de basilic",
      "Sel et poivre",
    ],
    steps: [
      "Lavez tous les légumes et coupez aubergines, courgettes et poivrons en cubes d’environ 2 cm.",
      "Émincez les oignons, hachez l’ail et concassez les tomates.",
      "Faites revenir les aubergines dans 2 c. à soupe d’huile pendant 8 minutes, puis réservez.",
      "Faites revenir les courgettes 5 minutes dans 1 c. à soupe d’huile, puis réservez.",
      "Dans une cocotte, faites fondre les oignons et les poivrons avec le reste d’huile pendant 8 minutes.",
      "Ajoutez l’ail, les tomates et le bouquet garni, puis laissez compoter 10 minutes.",
      "Ajoutez les aubergines et les courgettes, salez, poivrez, couvrez et laissez mijoter 35 à 40 minutes à feu doux.",
      "Retirez le bouquet garni, parsemez de basilic ciselé et servez chaud ou froid.",
    ],
  },
  friedRice: {
    id: "friedRice",
    title: "Fried rice",
    description:
      "Un riz sauté express et généreux, idéal pour recycler le riz de la veille.",
    servings: 4,
    prepTime: "20 min",
    difficulty: "Facile",
    budget: "€",
    image: "", // TODO: ajouter une image
    ingredients: [
      "600 g de riz cuit la veille (environ 250 g cru)",
      "3 œufs",
      "150 g de petits pois",
      "1 carotte",
      "3 oignons nouveaux",
      "2 gousses d’ail",
      "1 morceau de gingembre frais (2 cm)",
      "3 c. à soupe de sauce soja",
      "1 c. à café d’huile de sésame",
      "2 c. à soupe d’huile neutre",
      "Poivre",
    ],
    steps: [
      "Coupez la carotte en petits dés, émincez les oignons nouveaux en séparant le blanc du vert, hachez l’ail et le gingembre.",
      "Battez les œufs, faites-les cuire en omelette brouillée dans 1 c. à soupe d’huile au wok, puis réservez.",
      "Faites chauffer le reste d’huile à feu vif et faites sauter le blanc des oignons, l’ail et le gingembre 1 minute.",
      "Ajoutez la carotte et les petits pois, puis faites sauter 3 à 4 minutes.",
      "Ajoutez le riz en l’égrainant et faites-le sauter 4 à 5 minutes à feu vif, sans trop remuer, pour qu’il grille légèrement.",
      "Versez la sauce soja et l’huile de sésame, puis ajoutez les œufs et mélangez bien.",
      "Poivrez, parsemez du vert des oignons et servez aussitôt.",
    ],
  },
};
export const recipesExample: Record<string, Recipe> = {
  courgettes: {
    id: "courgettes",
    title: "Tartare de courgettes",
    description: "Une recette fraîche, légère et ultra simple à préparer.",
    servings: 4,
    prepTime: "25 min",
    difficulty: "Facile",
    budget: "€€",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      "2 courgettes",
      "1 échalote",
      "200 g de fromage frais",
      "1 c. à soupe d’huile d’olive",
      "1 pincée de sel",
      "Poivre noir",
      "Poivre noir",
      "Poivre noir",
      "Poivre noir",

      "Quelques herbes fraîches",
    ],
    steps: [
      "Lavez les courgettes et coupez-les en petits morceaux.",
      "Lavez les courgettes et coupez-les en petits morceaux.",
      "Lavez les courgettes et coupez-les en petits morceaux.",
      "Lavez les courgettes et coupez-les en petits morceaux.",

      "Lavez les courgettes et coupez-les en petits morceaux.",
      "Lavez les courgettes et coupez-les en petits morceaux.",
      "Faites fondre l’échalote dans l’huile chaude pendant 2 minutes.",
      "Ajoutez les courgettes avec une pincée de sel et laissez cuire 8 à 10 minutes.",
      "Mixez légèrement pour garder une texture généreuse, puis ajoutez le fromage frais.",
      "Rectifiez l’assaisonnement, parsemez d’herbes et servez chaud ou tiède.",
    ],
  },
  tomates: {
    id: "tomates",
    title: "Salade de tomates grillées",
    description:
      "Un accompagnement gourmand, coloré et parfait pour le barbecue.",
    servings: 3,
    prepTime: "20 min",
    difficulty: "Facile",
    budget: "€",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      "4 tomates bien mûres",
      "1 gousse d’ail",
      "1 c. à soupe de vinaigre balsamique",
      "2 c. à soupe d’huile d’olive",
      "Sel et poivre",
      "Basilic frais",
    ],
    steps: [
      "Coupez les tomates en deux et déposez-les sur une plaque.",
      "Ajoutez l’huile, l’ail haché, le sel et le poivre.",
      "Faites griller 10 minutes au four chaud.",
      "Arrosez de vinaigre balsamique et ajoutez le basilic.",
      "Servez tiède avec un peu de pain.",
    ],
  },
  poulet: {
    id: "poulet",
    title: "Poulet au citron",
    description: "Un classique simple, parfumé et bien doré.",
    servings: 4,
    prepTime: "35 min",
    difficulty: "Moyen",
    budget: "€€",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    ingredients: [
      "4 morceaux de poulet",
      "1 citron",
      "2 gousses d’ail",
      "1 c. à soupe de moutarde",
      "1 c. à soupe d’huile",
      "Sel, poivre, thym",
    ],
    steps: [
      "Marinez le poulet avec le jus de citron, l’ail et la moutarde.",
      "Laissez reposer 15 minutes avant cuisson.",
      "Faites cuire dans une poêle avec l’huile pendant 12 à 15 minutes.",
      "Retournez les morceaux pour qu’ils soient bien dorés.",
      "Ajoutez un peu de thym et servez avec les jus de cuisson.",
    ],
  },
};
