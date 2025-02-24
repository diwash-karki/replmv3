import { useState } from 'react';
import { useLocation } from 'wouter';
import { loginWithGoogle } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      setLocation('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Could not sign in with Google"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <Card className="w-[350px]">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-sm text-center text-muted-foreground">
            Sign in to access your account
          </p>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleGoogleLogin}
            disabled={loading}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-6"
          >
            <FcGoogle className="w-5 h-5" />
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}