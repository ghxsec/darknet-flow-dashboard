
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { ConnectionCard } from '@/components/ConnectionCard';
import { ServerList } from '@/components/ServerList';
import { StatsCard } from '@/components/StatsCard';
import { QuickSettings } from '@/components/QuickSettings';
import { useToast } from "@/hooks/use-toast";

const servers = [
  { id: 1, country: 'United States', city: 'New York', ping: 45, load: 65, favorite: true },
  { id: 2, country: 'Germany', city: 'Frankfurt', ping: 78, load: 42, favorite: false },
  { id: 3, country: 'Japan', city: 'Tokyo', ping: 112, load: 38, favorite: true },
  { id: 4, country: 'United Kingdom', city: 'London', ping: 64, load: 72, favorite: false },
  { id: 5, country: 'Singapore', city: 'Singapore', ping: 95, load: 53, favorite: false },
  { id: 6, country: 'Australia', city: 'Sydney', ping: 134, load: 31, favorite: false },
];

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const { toast } = useToast();

  const handleToggleConnection = () => {
    setIsConnected(!isConnected);
    
    if (!isConnected) {
      toast({
        title: "Connected Successfully",
        description: `Your connection is now secured via ${selectedServer.city}, ${selectedServer.country}`,
        duration: 3000,
      });
    } else {
      toast({
        title: "Disconnected",
        description: "Your connection is no longer secured",
        duration: 3000,
      });
    }
  };

  const handleSelectServer = (server: any) => {
    setSelectedServer(server);
    
    if (isConnected) {
      setIsConnected(false);
      setTimeout(() => {
        setIsConnected(true);
        toast({
          title: "Server Changed",
          description: `Connected to ${server.city}, ${server.country}`,
          duration: 3000,
        });
      }, 800);
    }
  };

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-white/60">Monitor and control your connection</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-white/60">Last refresh</p>
            <p className="text-sm">May 13, 2025 11:42 AM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <ConnectionCard
            isConnected={isConnected}
            toggleConnection={handleToggleConnection}
            currentServer={`${selectedServer.city}, ${selectedServer.country}`}
            ipAddress={isConnected ? "198.51.100.42" : "203.0.113.195"}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <StatsCard
            download={isConnected ? "8.5 MB/s" : "0 MB/s"}
            upload={isConnected ? "2.3 MB/s" : "0 MB/s"}
            isConnected={isConnected}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServerList
            servers={servers}
            onSelectServer={handleSelectServer}
            selectedServerId={selectedServer.id}
          />
          <QuickSettings />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
