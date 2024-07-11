import logo from './logo.svg';
import './App.css';

function App() {
  
return (
  <div className="App">
    <div class="filled-circle"></div>
    <div class="empty-circle"></div>
    <img src="/Rectangle 1.png" alt="Rectangle" className="rectangle absolute inset-0 w-full h-full object-cover z-0" />
    <div className="form-container relative flex flex-col items-center justify-center z-10">
      <h2 className="text-center font-semibold mb-4 text-2xl text-white">LOGIN</h2>
      <form className="relative">
        <div className="mb-4">
          <label htmlFor="username" className="block text-md font-semibold text-gray-700"></label>
          <input type="text" id="username" placeholder="Username" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-md font-semibold text-gray-700"></label>
          <input type="password" id="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="mb-6">
          <button type="submit" id="button" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded">Login</button>
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-300 hover:text-blue-700">Forgot password</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Register</a>
        </div>
      </form>
    </div>
  </div>
);
}


export default App;
