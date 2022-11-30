export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  store: string;
  anotherImageUrl: string;
  description: string;
}

export const data: Product[] = [
  {
    name: "Tomato",
    price: 14.2,
    imageUrl:
      "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg",
    store: "Shufersal",
    anotherImageUrl:
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
    description: "Nice red tomatos for salad",
  },
  {
    name: "Cucumber",
    price: 11.1,
    imageUrl:
      "https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/Cucumber-hero@2x-1024x696.png",
    store: "Mega Bair",
    anotherImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Australia_Cucumbers_for_sale_at_store.jpg/1200px-Australia_Cucumbers_for_sale_at_store.jpg",
    description: "Nice green cucumbers for salad",
  },
  {
    name: "Eggs",
    price: 15.5,
    imageUrl:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283659/a-basket-of-eggs.jpg",
    store: "Victory",
    anotherImageUrl:
      "data:image/jpeg;base64,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",
    description: "12 Large eggs for omelete",
  },
  {
    name: "Bread",
    price: 18,
    imageUrl:
      "data:image/jpeg;base64,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",
    store: "Shufersal",
    anotherImageUrl:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Bread-Recipe-5-2.jpg",
    description: "Nice Bread for toasts",
  },
];
