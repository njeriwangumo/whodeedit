import  { ReactNode, useEffect } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

// Define your app ID as a constant - replace with your actual app ID
const APP_ID = "your_app_id_here"; // Replace with your World ID app ID

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  console.log(MiniKit.isInstalled());
  useEffect(() => {
    // Initialize MiniKit with your app ID
    MiniKit.install(APP_ID);
  }, []);

  return <>{children}</>;
}