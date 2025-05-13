
import React from 'react';
import { ArrowDown, ArrowUp, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  download: string;
  upload: string;
  isConnected: boolean;
}

export const StatsCard = ({ download, upload, isConnected }: StatsCardProps) => {
  return (
    <Card className="glass-card">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white/5">
            <div className="flex items-center mb-2">
              <ArrowDown size={16} className="mr-2 text-vpn-accent" />
              <p className="text-sm text-white/60">Download</p>
            </div>
            <p className="text-2xl font-semibold">{isConnected ? download : '0 MB/s'}</p>
          </div>
          
          <div className="p-4 rounded-lg bg-white/5">
            <div className="flex items-center mb-2">
              <ArrowUp size={16} className="mr-2 text-vpn-accent-purple" />
              <p className="text-sm text-white/60">Upload</p>
            </div>
            <p className="text-2xl font-semibold">{isConnected ? upload : '0 MB/s'}</p>
          </div>
          
          <div className="p-4 rounded-lg bg-white/5">
            <div className="flex items-center mb-2">
              <Clock size={16} className="mr-2 text-vpn-accent-lime" />
              <p className="text-sm text-white/60">Total Usage</p>
            </div>
            <p className="text-2xl font-semibold">{isConnected ? '4.2 GB' : '0 GB'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
