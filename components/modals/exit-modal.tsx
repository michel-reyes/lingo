'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useExitModal } from '@/store/use-exit-modal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect, use } from 'react';

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_sad.svg" alt="mascot" width={80} height={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Are you sure you want to leave?
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Youa are about to leave the lesson.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              onClick={close}
              variant="primary"
              className="w-full"
              size="lg"
            >
              Keep learning
            </Button>
            <Button
              onClick={() => {
                close();
                router.push('/learn');
              }}
              variant="dangerOutline"
              className="w-full"
              size="lg"
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
