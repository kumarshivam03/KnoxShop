// import React from "react";
// import Layout from "../../components/Layouts/Layout";
// import AdminMenu from "../../components/Layouts/AdminMenu";
// import { useAuth } from "../../context/auth";
// const AdminDashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <>
//       <Layout title={"Admin-Dashboard"}>
//         <div className="container-fluid m-3 p-3">
//           <div className="row">
//             <div className="col-md-3">
//               <AdminMenu />
//             </div>
//             <div className="col-md-9">
//               <div className="card w-75 p-3">
//                 <h1>Admin Name:{auth?.user?.name}</h1>
//                 <h1>Admin Email:{auth?.user?.email}</h1>
//                 <h1>Admin Contact:{auth?.user?.phone}</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default AdminDashboard;

import React from "react";
import Layout from "../../components/Layouts/Layout";
import AdminMenu from "../../components/Layouts/AdminMenu";
import { useAuth } from "../../context/auth";
import "../Admin/styles/adminDashboard.css"; // Import your CSS

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout title={"Admin-Dashboard"}>
        <div className="admin-dashboard container-fluid d-flex justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-md-3 admin-menu-container">
              <AdminMenu />
            </div>
            <div className="col-md-9 d-flex justify-content-center align-items-center">
              <div className="card admin-info-card">
                <h1 className="admin-heading">Admin Dashboard</h1>
                <h2 className="admin-detail">
                  <span className="admin-label">Name:</span> {auth?.user?.name}
                </h2>
                <h2 className="admin-detail">
                  <span className="admin-label">Email:</span>{" "}
                  {auth?.user?.email}
                </h2>
                <h2 className="admin-detail">
                  <span className="admin-label">Contact:</span>{" "}
                  {auth?.user?.phone}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;
