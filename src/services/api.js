import axios from "axios";
import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "web"
    ? (process.env.NEXT_PUBLIC_API_URL ??
       process.env.EXPO_PUBLIC_API_URL ??
       "http://localhost:8000/api")
    : (process.env.EXPO_PUBLIC_API_URL ??
       "http://192.168.31.108:8000/api");

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});


//php artisan serve --host 0.0.0.0 --port 8000 (rodar no backend laravel) 127.0.0.1

