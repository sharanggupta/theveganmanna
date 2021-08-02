export interface StringInterface {
  [x: string]: string;
}

export interface AnyInterface {
  [x: string]: any;
}

export interface User {
  id: string; // username
  sub: string;
  email: string;
  image?: string;
  bio?: string;
  social?: Social;
  recipes?: {
    items: Recipe[];
    nextToken?: string;
  };
  likes?: {
    items: Like[];
    nextToken?: string;
  };
  messages?: {
    items: Message[];
    nextToken?: string;
  };
  isAdmin: boolean;
  isActive: number;
  createdAt: string;
  updatedAt: string;
  externalProvider?: boolean;
}

export interface Recipe {
  id: string;
  recipeName: string;
  cuisine: string;
  prepTime: number;
  serving: string;
  description: string;
  images?: string[];
  video?: string;
  ingredients: Ingredient[];
  instructions: string[];
  calories: string;
  owner: string;
  userID: string;
  user?: User;
  categoryID: string;
  category?: Category;
  typename?: string;
  isArchived: number;
  createdAt?: string;
  updatedAt?: string;
  comments?: {
    items: Comment[];
    nextToken?: string;
  };
  likes?: {
    items: Like[];
    nextToken?: string;
  };
}

export interface Report {
  id: string;
  recipe?: Recipe;
  userID: string;
  reportedUsers: ReportedUsers[];
  count: number;
  typename?: string;
}

export interface Category {
  id: string;
  name: string;
  recipes?: {
    items: Recipe[];
    nextToken?: string;
  };
}

export interface Message {
  id: string;
  recipeID: string;
  recipe?: Recipe;
  userID: string;
  user?: User;
  message: string;
  isRead: number;
  createdAt: string;
}

interface ReportedUsers {
  userID: string;
  createdAt: string;
}

interface Social {
  twitter: string;
  instagram: string;
  facebook: string;
}

export interface Ingredient {
  name: string;
  count: string;
}

export interface Comment {
  id: string;
  recipeID: string;
  userID: string;
  user?: User;
  content: string;
  createdAt?: string;
}

export interface Like {
  id: string;
  recipeID: string;
  userID: string;
  user?: User;
  recipe?: Recipe;
  createdAt?: string;
}
