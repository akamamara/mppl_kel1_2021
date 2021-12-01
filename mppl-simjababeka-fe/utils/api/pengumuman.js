import baseApi from "@/utils/api/baseAPI";

export const getPengumuman = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/pengumuman`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};
