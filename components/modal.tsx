'use client';

import { ReactNode, Fragment } from 'react';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel
} from '@headlessui/react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Transition show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10 focus:outline-none" onClose={handleClose}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-white/5 backdrop-blur-xl transition-opacity' />
        </TransitionChild>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel className='relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};


