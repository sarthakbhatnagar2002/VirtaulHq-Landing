import { useState } from "react";
import { Eye, EyeOff, User, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors([]);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors([data.message || 'Login failed']);
      } else {
        setMessage(data.message || 'Login successful!');
        console.log('Login successful:', data.user);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrors(['Network error. Please check your connection and ensure the backend is running.']);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-4 mb-4 border-2 border-cyan-500 bg-black/80">
            <User className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-wider">
            LOGIN
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        </div>

        <div className="bg-neutral-900/90 border-2 border-cyan-500/50 p-8">
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5" />
                <div>
                  {errors.map((err, index) => (
                    <p key={index} className="text-red-300 text-sm">{err}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-cyan-900/50 border border-cyan-500/50">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-cyan-300 text-sm">{message}</p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-cyan-400 text-sm font-semibold tracking-wider">
                USERNAME
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  minLength="3"
                  className="w-full bg-black/50 border-2 border-neutral-600 focus:border-cyan-500 text-white px-4 py-3"
                  placeholder="Enter Your Username"
                />
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-cyan-400 text-sm font-semibold tracking-wider">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/50 border-2 border-neutral-600 text-white px-4 py-3"
                  placeholder="••••••••"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-cyan-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-6 border-2 border-transparent hover:border-cyan-400 transition-all duration-75 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  <span className="tracking-wider">LOGGING IN...</span>
                </div>
              ) : (
                <>
                  <span className="tracking-wider">LOGIN</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-neutral-400 text-sm mb-4">
              NEW USER?
            </p>
            <Link
              to="/signup"
              className="inline-block w-full text-center py-3 px-6 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-75 font-bold tracking-wider"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;