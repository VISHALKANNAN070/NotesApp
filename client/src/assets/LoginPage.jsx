import googleLogo from "../images/google-logo.svg";
const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = `http://localhost:5000/api/auth/google`;
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-base-200">
        <h1 className="text-5xl font-bold mb-4">Welcome to NotesApp</h1>
        <p className="text-lg max-w-md text-center">
          Your notes, secure and accessible anywhere. Sign in with Google to get started and never lose your ideas again.
        </p>
      </div>
      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <button
          onClick={handleLogin}
          className="btn color-primary  text-lg shadow-lg"
        >
          <img
            src={googleLogo}
            alt="Google"
            className="w-6 h-6 mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
