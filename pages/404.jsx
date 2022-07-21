import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Component
import Layout from "../layout/Layout";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <Layout>
      <div
        style={{ minHeight: "100vh", background: "black", marginTop: "-10px" }}
      >
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "50vh" }}>
          Oops Page Not Found
        </h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
