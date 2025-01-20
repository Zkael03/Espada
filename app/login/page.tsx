"use client"; // Mengaktifkan client-side rendering

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation"; // untuk pengalihan halaman

interface FormData {
  username: string;
  password: string;
}

interface FormErrors {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    username: "",
    password: "",
  });

  const router = useRouter(); // Hook untuk pengalihan halaman

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {
      username: "",
      password: "",
    };

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Ganti dengan API call login yang sebenarnya
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          // Login berhasil
          alert("Login successful!"); // Tampilkan alert
          router.push("/"); // Arahkan ke halaman utama
        } else {
          // Login gagal
          alert(result.message || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login.");
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side for logo */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <img src="/images/logo espada.png" alt="Logo" className="max-w-[200px]" />
      </div>

      {/* Right side for form */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="max-w-md w-full space-y-8 p-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-lg font-bold text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-lg font-bold text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
