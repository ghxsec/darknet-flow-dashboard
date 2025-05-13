
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Shield, Wifi, Globe, Lock } from 'lucide-react';

export const QuickSettings = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Shield className="mr-2" size={18} />
          Quick Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-vpn-muted mr-3">
                <Wifi size={16} className="text-vpn-accent" />
              </div>
              <div>
                <p className="font-medium">Auto-Connect</p>
                <p className="text-sm text-white/60">Connect on startup</p>
              </div>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-vpn-muted mr-3">
                <Lock size={16} className="text-vpn-accent-purple" />
              </div>
              <div>
                <p className="font-medium">Kill Switch</p>
                <p className="text-sm text-white/60">Block traffic on disconnect</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-vpn-muted mr-3">
                <Globe size={16} className="text-vpn-accent-lime" />
              </div>
              <div>
                <p className="font-medium">DNS Protection</p>
                <p className="text-sm text-white/60">Use secure DNS servers</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
