import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { PANTIP_BASE_API } from '@/services/constant';

const fetchClient = fetchBaseQuery({
  baseUrl: PANTIP_BASE_API,
  headers: {
    accept: 'application/json, text/plain, */*',
    ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
  },
});

export default fetchClient;
