import { $authHost, $host } from ".";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
   return data
}

export const createCity = async (city) => {
    const { data } = await $authHost.post('api/city', city);
    return data
}

export const fetchCities = async () => {
    const { data } = await $host.get('api/city');
   return data
}

export const createNews = async (news) => {
    const { data } = await $authHost.post('api/news', news);
    return data
}

export const fetchNews = async (typeId, cityId, page, limit=3) => {
    const { data } = await $host.get('api/news', {params:{
        typeId, cityId, page, limit
    }})
   return data
}

export const fetchOneNews = async (id) => {
    const { data } = await $host.get('api/news/'+ id);
   return data
}

