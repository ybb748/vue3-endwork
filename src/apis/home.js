import http from "@/utils/http";

/**
 * @description: 获取轮播图
 * @param {*}
 * @return {*}
 */
export function getBannerAPI() {
    return http.get('/home/banner');
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
    return http.get('/home/new')
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return http.get('/home/hot')
}


