import googleLogo from "../images/google-logo.svg";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/google";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-base-100 text-base-content overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-base-200 relative text-center">
        {/* Honeycomb Decorative BG */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] bg-repeat z-0" />
        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Welcome to <span className="text-primary">NotesApp</span>
          </h1>
          <p className="text-base md:text-lg text-base-content/80">
            Your notes, secure and accessible anywhere. Sign in with Google to get started and never lose your ideas again.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-base-100">
        <div className="w-full max-w-sm bg-base-300 p-6 md:p-8 rounded-2xl shadow-xl space-y-6 text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-base-content/70 text-sm">Sign in to access your notes</p>
          <button
            onClick={handleLogin}
            className="btn color-primary text-base font-semibold w-full flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
          >
            <img src={googleLogo} alt="Google" className="w-6 h-6" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
