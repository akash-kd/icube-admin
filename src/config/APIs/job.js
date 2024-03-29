import { getHeader, Instance } from "../index";

export const getAllJobs = (query = {}) => {
    return Instance.get(
        `/jobs${
            Object.keys(query)?.length > 0
                ? `?${new URLSearchParams(query)}`
                : ""
        }`,
        getHeader()
    );
};

export const getAJobs = (id) => {
    return Instance.get(`/jobs/${id}`, getHeader());
};

export const deleteAJobs = (id) => {
    return Instance.delete(`/jobs/${id}`, getHeader());
};

export const updateAJobs = (id, body) => {
    return Instance.put(`/jobs/${id}`, body, getHeader());
};

export const createAJobs = (body) => {
    return Instance.post(`/jobs`, body, getHeader());
};
