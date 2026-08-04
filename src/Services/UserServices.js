import { api } from "./api";

export const latestHomeThreeNews = () => {
    return api.get(`/home/latest-3-news`);
};

export const bannerAdds = () => {
    return api.get(`/home/all-banner-ads`);
};

export const premiumAdds = () => {
    return api.get(`/home/latest-premier-ad`);
};

export const getGroupedCategory = () => {
    return api.get(`/home/news-grouped-by-category`);
};

export const getAllBox = () => {
    return api.get(`/home/all-box-ads`);
};

export const getFilteredNewsData = (data) => {
    const params = new URLSearchParams();
    if (data?.categoryName) params.append('categoryName', data.categoryName);
    if (data?.type) params.append('type', data.type);
    if (data?.count) params.append('count', data.count);
    return api.get(`/home/latest-FilteredNews?${params.toString()}`);
};

export const getFilterMatrimonyNewsData = (type) => {
    return api.get(`/home/matrimony-type?matrimonytype=${type}`);
};

export const getFilterTopicData = (type) => {
    return api.get(`/home/topic-type?topicType=${type}`);
};

export const getNewsBySlug = (slug) => {
    return api.get(`/news/getNewsBySlug/${encodeURIComponent(slug)}`);
};
