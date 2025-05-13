
import React from 'react';
import { Globe, ChevronRight, Signal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Server {
  id: number;
  country: string;
  city: string;
  ping: number;
  load: number;
  favorite: boolean;
}

interface ServerListProps {
  servers: Server[];
  onSelectServer: (server: Server) => void;
  selectedServerId: number | null;
}

export const ServerList = ({ servers, onSelectServer, selectedServerId }: ServerListProps) => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Globe className="mr-2" size={18} />
          Server Locations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[300px] overflow-y-auto scrollbar-none">
          {servers.map((server) => (
            <button
              key={server.id}
              onClick={() => onSelectServer(server)}
              className={`w-full flex items-center justify-between p-4 border-b border-white/5 transition-all hover:bg-white/5 ${
                selectedServerId === server.id ? 'bg-white/5' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-vpn-muted mr-3">
                  {server.country.slice(0, 2)}
                </div>
                <div className="text-left">
                  <p className="font-medium">{server.country}</p>
                  <p className="text-sm text-white/60">{server.city}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="hidden sm:flex items-center mr-4">
                  <Signal size={14} className="mr-1 text-white/60" />
                  <span className="text-sm text-white/60">{server.ping} ms</span>
                </div>
                <ChevronRight size={16} className="text-white/60" />
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
