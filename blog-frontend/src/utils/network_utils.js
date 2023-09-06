export const baseUrl = "http://localhost:4000";

export const fetchRequestOption = (reqMethod, data)  => {
    return {
        method: reqMethod,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: data
    }
};


