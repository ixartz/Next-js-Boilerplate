import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@/constants/api';
import { axios } from '@/libs/axios';

type FindProductSpecificationsProps = {
  claudeStream?: boolean;
  image_file: File | Blob;
};

const findProductSpecifications = async ({
  claudeStream,
  image_file,
}: FindProductSpecificationsProps) => {
  const formData = new FormData();

  if (claudeStream !== undefined) {
    formData.append('claudeStream', String(claudeStream));
  }

  // Tên field "image_file" phải khớp với API backend
  formData.append('image_file', image_file);

  const response = await axios.post(
    API_ENDPOINTS.AI.FIND_PRODUCT_SPECIFICATIONS,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data.data;
};

export function useFindProductSpecifications() {
  const {
    error,
    isPending,
    mutateAsync,
  } = useMutation({
    mutationFn: findProductSpecifications,
  });

  return {
    error,
    loading: isPending,
    mutateAsync,
  };
}
