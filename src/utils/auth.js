function auth() {
  const setAuth = (dataUser) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(dataUser));
      return dataUser;
    }
  };
  const getAuth = () => {
    if (typeof window !== "undefined") {
      const dataUser = localStorage.getItem("user");
      return JSON.parse(dataUser);
    }
  };
  const getToken = () => {
    if (typeof window !== "undefined") {
      const dataUser = getAuth();
      return dataUser.access_token;
    }
  };
  const logout = () => {
    localStorage.clear();
    // window.location.reload();
    window.location.href = "/";
  };
  return {
    setAuth,
    getAuth,
    getToken,
    logout,
  };
}
export default auth();
