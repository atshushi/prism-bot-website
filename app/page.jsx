'use client';
import React from 'react';

import { fetchClientData } from '../lib/fetch-client-data';
import '../styles/globals.css';

export default function homePage() {
  const [data, setData] = React.useState({});
  (async() => setData(await fetchClientData()))();

  return (
    <>
      <main className="flex flex-col justify-center items-center mt-44">
        <div className="flex justify-center flex-col items-center">
          <span className="font-black text-7xl max-md:text-4xl text-center">
              The Best Music Bot Is
            <h1 style={{
              'background': '-webkit-linear-gradient(100deg, #24292F 20%, #FB029E 100%)',
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': 'transparent',
            }} className="font-black text-9xl max-md:text-6xl">PrismBot</h1>
          </span>
          <p className="text-center text-xl max-md:text-sm">PrismBot is a music bot created and developed to play your favorite songs!</p>

          <button className="mt-10 pt-2 pb-2 pr-10 pl-10 bg-[#FB029E] rounded-xl text-white font-semibold">
            <a href="https://discord.com/oauth2/authorize?client_id=1010005602480689243&permissions=412320032832&scope=bot%20applications.commands">Add to your server</a>
          </button>
        </div>
      </main>

      {(data.topTracks && data.uptime && data.currentPlayers) && (
        <ul className="mt-28 mb-10 w-full flex flex-wrap items-center justify-center gap-8">
          <li className="bg-[#F9F9F9] rounded-2xl h-32 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-2xl mb-2">🕰️ Online at</h1>
            <p className="text-xl pl-5">{`${~~(data.uptime / 3600000) % 24}h ${~~(data.uptime / 60000) % 60}m ${~~(data.uptime / 1000) % 60}s`}</p>
          </li>

          <li className="bg-[#F9F9F9] rounded-2xl h-50 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-2xl mb-2">🔥 Trending Musics</h1>
            {data.topTracks.map((el, i) => <p className="text-xl pl-5" key={i}>{i + 1}. {el}</p>)}
          </li>

          <li className="bg-[#F9F9F9] rounded-2xl h-32 w-96 px-3 py-5 shadow-lg">
            <h1 className="font-bold text-2xl mb-2">🎵 Connected at</h1>
            <p className="text-xl pl-5">+{data.currentPlayers} Voice Channels </p>
          </li>
        </ul>
      )}
    </>
  );
}
