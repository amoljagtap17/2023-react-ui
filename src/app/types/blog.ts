export interface iBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  ratings: number;
  category: iBlogCategory;
  isPublished: boolean;
  createdAt: string;
}

export interface iBlogCategory {
  id: string;
  name: string;
  description: string;
}

export interface iBlogsCategoriesFormData {
  blogsCategories: iBlogCategory[];
}

export interface iBlogFormData
  extends Omit<iBlog, "slug" | "category" | "createdAt"> {
  blogCategoryId: string;
}
