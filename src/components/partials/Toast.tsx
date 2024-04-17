import React from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

import { getToasts } from '@/slices/toastSlice';

export interface ToastProps {
  id?: string;
  severity?: 'info' | 'success' | 'error' | 'warning';
  message?: string;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
    | 'center';
  duration?: number;
}

function ToastItem({ id, severity, message, position, duration }: ToastProps) {
  const wrapper = () =>
    twMerge(
      'max-w-xs rounded-xl border border-gray-200 bg-white shadow-lg animate-fade-in fixed z-[999]',
      position === 'top-right' && 'top-5 right-5',
      position === 'top-left' && 'top-5 left-5',
      position === 'bottom-right' && 'bottom-5 right-5',
      position === 'bottom-left' && 'bottom-5 left-5',
      position === 'top-center' && 'top-5 left-1/2 -translate-x-1/2',
      position === 'bottom-center' && 'bottom-5 left-1/2 -translate-x-1/2',
      position === 'center' &&
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      duration === 0
        ? 'animate-none'
        : `animate-fade-out delay-[${duration}ms]`,
    );

  switch (severity) {
    case 'info': {
      return (
        <div className={wrapper()} role="alert" id={id}>
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                className="mt-0.5 size-4 shrink-0 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700">{message}</p>
            </div>
          </div>
        </div>
      );
    }

    case 'success': {
      return (
        <div className={wrapper()} role="alert" id={id}>
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                className="mt-0.5 size-4 shrink-0 text-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700">{message}</p>
            </div>
          </div>
        </div>
      );
    }
    case 'error':
      return (
        <div className={wrapper()} role="alert" id={id}>
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                className="mt-0.5 size-4 shrink-0 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700">{message}</p>
            </div>
          </div>
        </div>
      );

    case 'warning':
      return (
        <div className={wrapper()} role="alert" id={id}>
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                className="mt-0.5 size-4 shrink-0 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700">{message}</p>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={wrapper()} role="alert" id={id}>
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                className="mt-0.5 size-4 shrink-0 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700">{message}</p>
            </div>
          </div>
        </div>
      );
  }
}

export default function Toast() {
  const toasts = useSelector(getToasts);
  return toasts.map((toast) => (
    <ToastItem
      key={toast.id}
      id={toast.id}
      severity={toast.severity}
      message={toast.message}
      position={toast.position}
      duration={toast.duration}
    />
  ));
}
