import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

console.log('VITE_APP_HOST:', process.env.VITE_APP_HOST);
console.log('VITE_APP_PORT:', process.env.VITE_APP_PORT);



// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  server :{
    host: process.env.VITE_APP_HOST,
    port: process.env.VITE_APP_PORT,
  },
})
