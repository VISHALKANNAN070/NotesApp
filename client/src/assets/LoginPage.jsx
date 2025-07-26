import googleLogo from "../images/google-logo.svg";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/google";
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-base-200 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to NotesApp</h1>
        <p className="text-base md:text-lg max-w-md">
          Your notes, secure and accessible anywhere. Sign in with Google to get started and never lose your ideas again.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
        <button
          onClick={handleLogin}
          className="btn color-primary text-base md:text-lg shadow-lg w-full max-w-xs"
        >
          <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
