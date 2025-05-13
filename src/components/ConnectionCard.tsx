
import React from 'react';
import { Shield, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ConnectionCardProps {
  isConnected: boolean;
  toggleConnection: () => void;
  currentServer: string;
  ipAddress: string;
}

export const ConnectionCard = ({ isConnected, toggleConnection, currentServer, ipAddress }: ConnectionCardProps) => {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${
              isConnected 
                ? 'from-vpn-accent/20 to-vpn-accent-purple/20' 
                : 'from-gray-800/20 to-gray-900/20'
            }`} 
          />
          <div className="relative p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
                  isConnected 
                    ? 'bg-gradient-to-br from-vpn-accent to-vpn-accent-purple animate-pulse-glow' 
                    : 'bg-vpn-muted'
                }`}>
                  <Shield size={28} className="text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </h2>
                  <p className="text-sm text-white/60">
                    {isConnected 
                      ? `Your traffic is secure via ${currentServer}` 
                      : 'Your traffic is not secure'
                    }
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={toggleConnection}
                className={`px-8 py-6 rounded-full transition-all ${
                  isConnected 
                    ? 'bg-vpn-accent hover:bg-vpn-accent/80 text-vpn-darker shadow-[0_0_15px_rgba(54,249,246,0.5)]' 
                    : 'bg-vpn-muted hover:bg-vpn-muted/80 text-white'
                }`}
              >
                <Power size={20} className="mr-2" />
                {isConnected ? 'Disconnect' : 'Connect'}
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between">
              <div className="mb-3 sm:mb-0">
                <p className="text-xs text-white/60">IP Address</p>
                <p className="text-sm font-medium">{isConnected ? ipAddress : 'Not Protected'}</p>
              </div>
              <div className="mb-3 sm:mb-0">
                <p className="text-xs text-white/60">Status</p>
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                  <p className="text-sm font-medium">{isConnected ? 'Protected' : 'Exposed'}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-white/60">Session</p>
                <p className="text-sm font-medium">{isConnected ? '00:42:18' : '00:00:00'}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
