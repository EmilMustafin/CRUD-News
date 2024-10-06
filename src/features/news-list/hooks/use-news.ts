import { Dispatch, SetStateAction, useState } from 'react';
import { INews } from '@/entities/form-news';
import { saveNewsToStorage } from '../lib/storage-news';

export const useNews = (initialNews: INews[], setNews: Dispatch<SetStateAction<INews[]>>) => {
  const [editingNews, setEditingNews] = useState<INews | null>(null);

  const handleAddNews = (newNews: INews) => {
    const updatedNews = [newNews, ...initialNews];
    setNews(updatedNews);
    saveNewsToStorage(updatedNews);
  };

  const editNews = (updatedNews: INews) => {
    const updatedList = initialNews.map((item) =>
      item.id === updatedNews.id ? updatedNews : item,
    );
    setNews(updatedList);
    saveNewsToStorage(updatedList);
  };

  const deleteNews = (id: number) => {
    const updatedNews = initialNews.filter((item) => item.id !== id);

    setNews(updatedNews);
    saveNewsToStorage(updatedNews);

    if (updatedNews.length === 0) {
      localStorage.removeItem('news');
    }
  };

  return {
    initialNews,
    editingNews,
    setEditingNews,
    handleAddNews,
    editNews,
    deleteNews,
  };
};
