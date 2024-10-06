import { useState, useEffect, FormEvent } from 'react';
import { Select } from '@/shared/ui/select/select';
import styles from './news-form.module.scss';
import { newsTags } from '../../model/constants';
import { INews } from '../../model/types';

interface AddNewsFormProps {
  initialNews?: INews | null;
  onAdd: (news: INews) => void;
  onClose: () => void;
  onEdit?: (updatedNews: INews) => void;
}

export const NewsForm = ({ initialNews, onAdd, onClose, onEdit }: AddNewsFormProps) => {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialNews) {
      setSelectedTag(initialNews.tags || '');
      setAuthor(initialNews.author);
      setTitle(initialNews.title);
      setContent(initialNews.content);
    }
  }, [initialNews]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (initialNews && onEdit) {
      const updatedNews: INews = {
        ...initialNews,
        author,
        title,
        content,
        tags: selectedTag,
        datePublished: new Date().toDateString(),
      };
      onEdit(updatedNews);
    } else {
      const newNews: INews = {
        id: Date.now(),
        author,
        title,
        content,
        tags: selectedTag,
        datePublished: new Date().toDateString(),
      };
      onAdd(newNews);
    }

    setAuthor('');
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label htmlFor='author' className={styles.label}>
        Author:
      </label>
      <input
        id='author'
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={styles.input}
        required
      />

      <label htmlFor='title' className={styles.label}>
        Title:
      </label>
      <input
        id='title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        required
      />

      <label htmlFor='content' className={styles.label}>
        Content:
      </label>
      <textarea
        id='content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.textarea}
        required
      />
      <Select
        id='tags'
        label='Tags'
        options={newsTags}
        value={selectedTag}
        onChange={setSelectedTag}
      />

      <button type='submit' className={styles.button}>
        {initialNews ? 'Save Changes' : 'Add News'}
      </button>
    </form>
  );
};
