import { Dispatch, SetStateAction, useState } from 'react';
import { INews, NewsForm } from '@/entities/form-news';
import { Modal } from '@/shared/ui/modal/ui/modal';
import styles from './news-control.module.scss';
import { useNews } from '../hooks/use-news';

interface Props {
  news: INews[];
  setNews: Dispatch<SetStateAction<INews[]>>;
}

export const NewsControl = ({ news, setNews }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setEditingNews, editingNews, handleAddNews, editNews, deleteNews } = useNews(
    news,
    setNews,
  );

  const handleOpenModal = () => {
    setEditingNews(null);
    setIsModalOpen(true);
  };
  const handleOpenEditModal = (news: INews) => {
    setEditingNews(news);
    setIsModalOpen(true);
  };
  return (
    <>
      <button className={styles.addButton} onClick={handleOpenModal}>
        Add News
      </button>

      <ul className={styles.list}>
        {news.map((newsItem) => (
          <li key={newsItem.id} className={styles.item}>
            <p className={styles.label}>Author:</p>
            <h3 className={styles.name}>{newsItem.author}</h3>
            <p className={styles.label}>Tag:</p>
            <span className={styles.tag}>{newsItem.tags || 'Miscellaneous'}</span>
            <p className={styles.label}>Title:</p>
            <p className={styles.role}>{newsItem.title}</p>
            <p className={styles.label}>Content:</p>
            <p className={styles.content}>{newsItem.content}</p>
            <p className={styles.label}>Date of Publish:</p>
            <p className={styles.date}>{newsItem.datePublished}</p>
            <div className={styles.buttons}>
              <button className={styles.editButton} onClick={() => handleOpenEditModal(newsItem)}>
                Edit
              </button>
              <button className={styles.deleteButton} onClick={() => deleteNews(newsItem.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        title={editingNews ? 'Edit News' : 'Add News'}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <NewsForm
          initialNews={editingNews}
          onEdit={editNews}
          onAdd={handleAddNews}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};
