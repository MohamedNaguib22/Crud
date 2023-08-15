import { Navbar } from "../Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[85vh]">
        <h1 className="text-[120px] font-bold text-green-500">CRUD SYSTEM</h1>
      </div>
    </>
  );
}

export default Home