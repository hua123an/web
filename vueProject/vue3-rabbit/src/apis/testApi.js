import httpInstance from "@/utils/http";
export function getConnect() {
   return  httpInstance({
        url: 'home/category/head'
    })
}