import React from "react";
import Layout from "../../Layout/Layout";
import Card from "../../components/Card/Card";
import Activity from "../../components/Activity/Activity";

function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold pb-3">Dashboard</h1>
      <Card />

      <h1 className="text-2xl font-bold py-3">Activity</h1>
      <Activity />
    </Layout>
  );
}

export default Dashboard;
