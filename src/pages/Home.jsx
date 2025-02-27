function Home() {
    return (
      <div className="container mx-auto mt-10 p-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Home Page</h1>
        <p className="text-center text-lg mb-6">
          You have successfully logged in!
        </p>
        <div className="flex justify-center">
          <a
            href="/login"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </a>
        </div>
      </div>
    );
  }
  
  export default Home;