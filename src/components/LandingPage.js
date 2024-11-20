import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

function LandingPage() {
  const navigate = useNavigate();

  const handleStartSharing = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <nav className="container mx-auto px-10 lg:px-[60px] py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-bold text-gray-800">ShareWave</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-10 lg:px-[60px] pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Share Files
              <span className="text-primary block">Instantly & Securely</span>
            </h1>
            <p className="text-xl text-gray-600">
              Experience lightning-fast file sharing with real-time transfer capabilities.
              No size limits, no compression, just pure speed.
            </p>
            <div className="space-x-4">
              <button
                onClick={handleStartSharing}
                className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                Start Sharing
              </button>
              <button className="border-2 border-gray-300 hover:border-primary text-gray-600 hover:text-primary font-bold py-3 px-8 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-10 blur-3xl rounded-full"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="flex items-center space-x-4 mt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2 mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Real-time Transfer</h3>
            <p className="text-gray-600">Experience instant file sharing with our powerful WebSocket technology.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Secure Sharing</h3>
            <p className="text-gray-600">Your files are encrypted and protected during the entire transfer process.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">No Size Limits</h3>
            <p className="text-gray-600">Share files of any size without compression or quality loss.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;