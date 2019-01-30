import { create } from 'apisauce';

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'homologUrl'
  : 'prodUrl';

const api = create({
  baseUrl,
});

export default api;
