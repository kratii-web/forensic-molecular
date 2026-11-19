import React, { useState } from 'react';

const Login = () => {
  const [badge, setBadge] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ badge, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      alert(`Welcome, ${data.user.name}`);
      // window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md clinical-bg min-h-screen flex items-center justify-center p-4">
      {/* Suppression of Shell Components based on Task-Focused / Linear Transactional Intent (Login) */}
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Branding and Features Column */}
        <div className="space-y-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-background mb-4">
              Forensic Molecular Laboratory Information System
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Digital case management for PCR and RT-PCR laboratory records. Engineered for high-precision forensic environments where data integrity and clarity are paramount.
            </p>
          </div>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-primary" data-icon="folder_special">folder_special</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-background">Organize</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Systematic categorization of complex molecular case files with absolute reliability.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-primary" data-icon="manage_search">manage_search</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-background">Retrieve</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Rapid, secure access to historical PCR data and audit trails.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-primary" data-icon="compare">compare</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-background">Compare</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">High-fidelity split-pane views for baseline sample analysis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form Column */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="font-headline-md text-headline-md text-on-background">Secure Access</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Authentication required for laboratory staff.</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="p-3 bg-error-container text-on-error-container rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Laboratory ID */}
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1" htmlFor="lab-id">Laboratory ID</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline">
                  <span className="material-symbols-outlined text-body-lg" data-icon="badge">badge</span>
                </span>
                <input
                  className="w-full pl-10 pr-3 py-2 bg-surface border border-outline-variant rounded focus:outline-none focus:border-on-tertiary-container focus:ring-1 focus:ring-on-tertiary-container font-data-mono text-data-mono text-on-background transition-colors"
                  id="lab-id"
                  name="lab-id"
                  placeholder="LAB-XXX-YYYY"
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline">
                  <span className="material-symbols-outlined text-body-lg" data-icon="lock">lock</span>
                </span>
                <input
                  className="w-full pl-10 pr-3 py-2 bg-surface border border-outline-variant rounded focus:outline-none focus:border-on-tertiary-container focus:ring-1 focus:ring-on-tertiary-container font-body-md text-body-md text-on-background transition-colors"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center gap-2 p-3 bg-surface-container-low border border-outline-variant rounded-md">
              <span className="material-symbols-outlined text-secondary text-body-lg" data-icon="security">security</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Connection is encrypted. Unauthorized access is strictly prohibited.</p>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-[#0D9488] text-white font-body-md text-body-md font-semibold py-3 px-4 rounded hover:bg-[#0f766e] transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] disabled:opacity-70"
              type="submit"
              disabled={loading}
            >
              <span className="material-symbols-outlined text-body-lg" data-icon="login">login</span>
              {loading ? 'Authenticating...' : 'Login to Laboratory System'}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-outline">System Version 4.2.1-SECURE | Environment: Production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
