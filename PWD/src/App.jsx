import React from "react";

const App = () =>{
  return(
    <React.Fragment>
    <div className="max-w-screen-2xl mx-auto h-dvh overflow:hidden bg-emerald-200">
     <h1 className="text-4xl font-semibold text-green-700 text-center underline">PASSWORD MANAGER BCV</h1>
     <div className="relative top-12 flex flex-col items-center gap-24">
      <form>
      <label className="text-xl font-medium mr-4">Website URL</label>
      <input type="text" className="px-8 py-2 border-solid border-2 border-green-600 rounded-2xl mr-4"/>
      <label className="text-xl font-medium mr-4">UserName</label>
      <input type="text" className="px-8 py-2 border-solid border-2 border-green-600 rounded-2xl mr-4"/>
      <label className="text-xl font-medium mr-4">Password</label>
      <input type="password" className="px-8 py-2 border-solid border-2 border-green-600 rounded-2xl mr-4"/>
      </form>
      <button className="px-12 py-2 bg-green-900 text-white rounded-lg text-xl hover:bg-white hover:text-green-900">Save</button>
     </div>
     <div className="relative top-16 bg-blue-500">
      <h1 className="text-2xl text-center text-white">Your Saved Passwords</h1>
      <div className="flex flex-col items-center">
      <div className="flex flex-row items-center"></div>
      </div>
     </div>
    </div>
    </React.Fragment>
  )
}

export default App;
