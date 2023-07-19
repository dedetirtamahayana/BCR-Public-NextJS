import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function NoAuth(props) {
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
    setMounted(true);
  }, [user]);
  return mounted ? props.children : <span></span>;
}

export default NoAuth;
