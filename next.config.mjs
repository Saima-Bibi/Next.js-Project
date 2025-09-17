/** @type {import('next').NextConfig} */


import dotenv from "dotenv";


if (process.env.NODE_ENV === "docker") {
  dotenv.config({ path: ".env.docker" });
} else {
  dotenv.config({ path: ".env.local" });
}

const nextConfig = {
    images:{
        domains:['images.pexels.com', 'img.daisyui.com']
    }

};

export default nextConfig;
