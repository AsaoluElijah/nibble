import AppLayout from "../../layouts/app";

const Profile = () => {
  return (
    <div className="container min-vh-100 justify-content-center align-items-center">
      <div className="text-center mt-5">
        <div className="d-inline-block bg-dark p-5 rounded-circle"></div>
        <h2 className="mt-3">Ade. Joy</h2>
        <div className="mt-4 alert alert-info">
          🚀 Profile page coming soon...
        </div>
      </div>
    </div>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
