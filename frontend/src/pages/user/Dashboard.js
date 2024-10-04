import React from "react";
import Layout from "../../components/Layouts/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/Layouts/UserMenu";

function Dashboard() {
  const [auth] = useAuth();

  // Inline styles for the dashboard
  const styles = {
    container: {
      padding: "30px",
      margin: "30px",
      backgroundColor: "#f3f8fe",
      backgroundImage: "linear-gradient(45deg, #83a4d4, #b6fbff)",
      borderRadius: "15px",
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px",
    },
    card: {
      width: "75%",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "15px",
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px",
      margin: "auto",
      textAlign: "center",
    },
    title: {
      fontWeight: "bold",
      fontFamily: '"Playfair Display", serif',
      fontSize: "22px",
      color: "#333",
      marginBottom: "15px",
    },
    info: {
      fontSize: "18px",
      marginBottom: "10px",
      color: "#555",
    },
  };

  return (
    <Layout title={"Dashboard - E-commerce App"}>
      <div style={styles.container}>
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div style={styles.card}>
              <h3 style={styles.title}>{auth?.user?.name}</h3>
              <h3 style={styles.info}>{auth?.user?.email}</h3>
              <h3 style={styles.info}>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
