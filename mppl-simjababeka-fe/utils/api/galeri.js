import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";

export const getGaleri = async (setData) => {
  //   setLoading(true);
  dispatch(loadingSet(true));
  return baseApi
    .get(`/galeri/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res.map(({ sampul_galeri, images, ...rest }) => ({ ...rest })));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const getGaleriRaw = async (setData) => {
  //   setLoading(true);
  dispatch(loadingSet(true));
  return baseApi
    .get(`/galeri/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const postGaleri = async (data, setData) => {
  dispatch(loadingSet(true));
  return baseApi
    .post(`/galeri/`, data)
    .then((res) => {
      console.log(res);
      setData(res);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const postImageToGaleriId = async (data) => {
  dispatch(loadingSet(true));
  //   for (var pair of data.entries()) {
  //     console.log(pair);
  //   }
  let formData = new FormData();
  formData.append("nama_gambar", data.nama_gambar);
  formData.append("nama_galeri", data.nama_galeri);
  formData.append("gambar_galeri", data.gambar_galeri);
  return baseApi
    .post(`/galeri/gambar/images/`, formData)
    .then((res) => {
      console.log(res);
      //   setData(res);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const deleteGaleriById = async (id) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .delete(`/galeri/${id}/`)
    .then((res) => {
      console.log(res);
      console.log("Data terhapus");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const updateGaleriById = async (id, updatedData) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .patch(`/galeri/${id}/`, updatedData)
    .then((res) => {
      console.log(res);
      console.log("Data berhasil diedit");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const getGaleriById = async (id, setDefaultValue) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .get(`/galeri/${id}`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setDefaultValue(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const getGaleriImageById = async (id, setDefaultValue) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .get(`/galeri/gambar/images/${id}/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setDefaultValue(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};
