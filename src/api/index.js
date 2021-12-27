import service from '../util/ajax'

//英雄查询
//https://www.jk.cxkf.cc/api_herolist.php
export const get_heroList= () => service.get('/api_herolist.php')

//战力查询
//https://jk.cxkf.cc/api_select.php?hero=武则天&type=wx
export const get_heroPower= (cname,type) => service.get(`/api_select.php?hero=${cname}&type=${type}`)