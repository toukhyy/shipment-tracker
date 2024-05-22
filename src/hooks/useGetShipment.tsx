import { useQuery } from '@tanstack/react-query';

export const useGetShipment = (code: string) =>
  useQuery({
    queryKey: ['shipment', code],
    queryFn: async () => {
      const data = await fetch(
        `https://tracking.bosta.co/shipments/track/${code}`
      );
      return data.json();
    },
  });
