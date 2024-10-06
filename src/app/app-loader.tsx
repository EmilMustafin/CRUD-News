import { ReactNode, useEffect, useState } from 'react';
import { Spinner } from '@/shared/ui/spinner/spinner';
export function AppLoader({ children }: { children?: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([]).finally(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
}
