// export const baseUrl = "http://localhost:4000";
export const baseUrl = "https://blog-app-mern-952d.onrender.com";

export const fetchRequestOption = (reqMethod, data)  => {
    return {
        method: reqMethod,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: data
    }
};


