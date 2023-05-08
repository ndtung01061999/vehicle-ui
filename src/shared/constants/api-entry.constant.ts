const studentApi = {
  create: '/api/sinhvien',
  update: '/api/sinhvien',
  filter: '/api/sinhvien/filter',
  getById: (id: any) => `/api/sinhvien/${id}`
};
const publicApi = {
  showFile: (id: any, file: any, type: any) => `${process.env.REACT_APP_MGMT_URL}/api/public/file?file=${file}&id=${id}&type=${type}`,
};
const API_ENTRY = {
  student: studentApi,
  public: publicApi,
}

export default API_ENTRY;