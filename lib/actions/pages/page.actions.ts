"use server";
import TAGS from "@/constants/tags";
import { Page } from "@/lib/models/pages.model";
import { connectToDatabase } from "@/lib/mongoose";
import { revalidateTag, unstable_cache } from "next/cache";

export const createPage = async (page: PageType): Promise<Result<PageType>> => {
  try {
    await connectToDatabase();
    const response = await Page.create(page);
    const createdPage: PageType = JSON.parse(JSON.stringify(response));
    revalidateTag(TAGS.pages);
    return {
      success: true,
      message: "Page Created Successfully",
      data: createdPage,
    };
  } catch {
    return { success: false, message: "Error creating Page" };
  }
};
export const getPages = async (): Promise<Result<PageType[]>> => {
  try {
    await connectToDatabase();
    const response = await Page.find({});
    const pages: PageType[] = JSON.parse(JSON.stringify(response));
    return {
      success: true,
      message: "pages fetched Successfully",
      data: pages,
    };
  } catch {
    return { success: false, message: "Error fetching pages" };
  }
};

export const getPage = unstable_cache(
  async (slug: string): Promise<Result<PageType>> => {
    try {
      await connectToDatabase();
      const response = await Page.findOne({ slug });
      const page: PageType = JSON.parse(JSON.stringify(response));
      if (!page) {
        return { success: false, message: "Page not found" };
      }
      return {
        success: true,
        message: "Page fetched successfully",
        data: page,
      };
    } catch {
      return { success: false, message: "Error fetching page" };
    }
  },
  [TAGS.pages],
  {
    tags: [TAGS.pages],
    revalidate: 60 * 60 * 24 * 7, // 7 days
  },
);
export const updatePage = async (page: PageType): Promise<Result<PageType>> => {
  try {
    await connectToDatabase();
    const response = await Page.findOneAndUpdate({ slug: page.slug }, page, {
      new: true,
    });
    const editedPage: PageType = JSON.parse(JSON.stringify(response));
    revalidateTag(TAGS.pages);
    return {
      success: true,
      message: "Page Edited Successfully",
      data: editedPage,
    };
  } catch {
    return { success: false, message: "Error editing Page" };
  }
};

export const deletePage = async (slug: string): Promise<Result> => {
  try {
    await connectToDatabase();
    await Page.findOneAndDelete({ slug });
    revalidateTag(TAGS.pages);
    return { success: true, message: "Page deleted successfully" };
  } catch {
    return { success: false, message: "Error deleting Page" };
  }
};
