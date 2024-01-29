import axios from 'axios';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isURL = (str:string) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(str);
};


const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Set your API base URL in your .env.local file

const axiosFetcher = axios.create({
  baseURL,
});

export const fetcher = async (url:string) => {
  try {
    const response = await axiosFetcher.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};