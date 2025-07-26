import googleLogo from "../images/google-logo.svg";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/google";
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center px-4 py-10 md:py-0">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row bg-base-200 rounded-3xl shadow-xl overflow-hidden">

        {/* Decorative Background Graphic */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 rounded-r-3xl" />
        </div>

        {/* Left Content */}
        <div className="relative w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start z-10 text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Welcome to <span className="text-primary">NotesApp</span>
          </h1>
          <p className="text-base md:text-lg max-w-md text-base-content/80">
            Secure your thoughts. Access them from anywhere. Start your journey by signing in with Google.
          </p>
        </div>

        {/* Right Content (Login Card) */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center bg-base-100 z-20">
          <div className="w-full max-w-sm bg-base-300 rounded-xl shadow-md p-6 md:p-8 space-y-6 text-center">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-base-content/70">Use your Google account to continue</p>
            <button
              onClick={handleLogin}
              className="btn color-primary w-full text-base font-semibold flex items-center justify-center gap-3 shadow hover:shadow-lg transition"
            >
              <img src={googleLogo} alt="Google" className="w-6 h-6" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
