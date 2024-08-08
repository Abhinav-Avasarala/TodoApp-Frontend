import React from 'react';
import { Clock } from 'lucide-react';
import './App.css'

function App() {

  return (
    <div className="flex flex-col h-screen bg-[#FFF3B0] text-[#4A4A4A] font-sans p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">TaskGPT</h1>
      
      <div className="flex flex-1 gap-4">
        {/* Left column */}
        <div className="flex flex-col w-1/4 gap-4">
          {/* Total time */}
          <div className="bg-[#FFD700] rounded-lg p-4 text-center">
            <h2 className="font-semibold mb-2">Total time</h2>
            <div className="text-2xl font-bold">4 hrs 18 mins</div>
          </div>
          
          {/* Time Blocks */}
          <div className="bg-[#FFA500] rounded-lg p-4 flex-1">
            <h2 className="font-semibold mb-2">Time Blocks</h2>
            {/* Add time block content here */}
          </div>
        </div>
        
        {/* Middle column - Tasks */}
        <div className="flex-1 bg-white rounded-lg p-4">
          <h2 className="font-semibold mb-4 text-xl">Tasks</h2>
          <div className="bg-[#FFD700] rounded-lg p-2 mb-2 flex justify-between items-center">
            <span>Task 1</span>
            <div className="flex items-center">
              <span className="bg-[#FFA500] text-white px-2 py-1 rounded mr-2 text-sm">P1</span>
              <span className="bg-[#87CEEB] text-white px-2 py-1 rounded text-sm">4 hrs</span>
            </div>
          </div>
          {/* Add more tasks here */}
        </div>
        
        {/* Right column - AI-Generated Schedule */}
        <div className="w-1/4 bg-[#FFD700] rounded-lg p-4">
          <h2 className="font-semibold mb-2">AI-Generated Schedule</h2>
          {/* Add schedule content here */}
        </div>
      </div>
      
      {/* Generate Schedule button */}
      <button className="mt-4 bg-[#FFA500] text-white py-2 px-4 rounded-lg hover:bg-[#FF8C00] transition-colors">
        Generate Schedule
      </button>
    </div>
  )
}

export default App
