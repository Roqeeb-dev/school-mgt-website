export default function Login() {
  return (
    <main>
      <div className="my-5">
        <h1 className="text-4xl font-semibold">Welcome</h1>
        <p className="text-gray-600 text-sm p-3">
          Please login to your account
        </p>
      </div>
      <form action="" className="flex flex-col gap-6">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username or Email"
          className="border-b focus:outline-none text-sm p-3"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="border-b focus:outline-none text-sm p-3"
        />
        <div>
          <a href="#">forgot password?</a>
          <button>Login</button>
        </div>
        <button>Register your school in our apps</button>
        <a href="#">Terms and Conditions & Privacy Policy</a>
      </form>
    </main>
  );
}
