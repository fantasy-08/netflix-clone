
const API_v = 'be0fa348918b87520241d2227bb8dc0e'

const requests = {
    top: `/movie/top_rated?api_key=${API_v}&language=en-US&page=1`,
    trending: `/trending/all/day?api_key=${API_v}`,
    discover: `/discover/movie?api_key=${API_v}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    movie: "/trending/movie/week?api_key=be0fa348918b87520241d2227bb8dc0e",
    tv: "/trending/tv/day?api_key=be0fa348918b87520241d2227bb8dc0e",
    banner: "/movie/top_rated?api_key=be0fa348918b87520241d2227bb8dc0e&language=en-US&page=1"
};

export default requests;

