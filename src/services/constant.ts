export const PANTIP_BASE_API = 'https://pantip.com/api';

export interface PantipResponse<T> {
  success: boolean;
  data: T[];
}
