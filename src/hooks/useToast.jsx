import { useState } from 'react';
import { toast } from 'react-toastify';

const useToast = () => {
  const [isBookmarkAdded, setIsBookmarkAdded] = useState(false);

  const handleBookmarkAdd = () => {
    toast.success('북마크가 추가되었습니다!');
    setIsBookmarkAdded(true);
  };

  const handleBookmarkRemove = () => {
    toast.error('북마크가 해제되었습니다!');
    setIsBookmarkAdded(false);
  };

  return { isBookmarkAdded, handleBookmarkAdd, handleBookmarkRemove };
};

export default useToast;
