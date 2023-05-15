//获取一级导航栏数据
import httpIntance from "@/utils/http";
export function getCategoryAPI() {
  return httpIntance ({
      url : '/home/category/head',
  })
}