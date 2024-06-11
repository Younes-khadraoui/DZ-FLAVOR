export interface Recipe {
  _id: string;
  image: string;
  name: string;
  ingredients: string[];
  instructions: string;
  tags: string[];
  categories: string[];
}
