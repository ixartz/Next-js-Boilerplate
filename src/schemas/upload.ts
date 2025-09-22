import { z } from 'zod';

// Định nghĩa các kiểu file được chấp nhận
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

// Kích thước file tối đa (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

// Schema validation cho file upload
export const uploadFileSchema = z.object({
  image_file: z
    .any()
    .optional(),
  // .refine(file => file instanceof File || file instanceof Blob, {
  //   message: 'Vui lòng chọn một file',
  // })
  // .refine(file => file?.size <= MAX_FILE_SIZE, {
  //   message: 'Kích thước file không được vượt quá 5MB',
  // })
  // .refine(file => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
  //   message: 'Chỉ chấp nhận các định dạng: JPG, PNG, WebP',
  // }),
  claudeStream: z.boolean().optional().default(true),
});

export type UploadFileFormData = z.infer<typeof uploadFileSchema>;

// Constants để export
export const FILE_UPLOAD_CONSTANTS = {
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE_MB: MAX_FILE_SIZE / (1024 * 1024),
} as const;
