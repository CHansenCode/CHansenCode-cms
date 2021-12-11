import { useState } from 'react';

export function FormAside({ toggle, children }) {
  return (
    <>
      <div className="bg pc3b fixed_form_wrapper">
        <form onSubmit={e => e.preventDefault()}>{children}</form>
      </div>

      <style jsx>{`
        .fixed_form_wrapper {
          position: fixed;
          top: 0;
          right: ${toggle ? '0' : '-32rem'};

          min-height: 100vh;
          width: 32rem;

          padding: 1rem;

          border-top: transparent;
          border-right: transparent;
          border-bottom: transparent;
        }
      `}</style>
    </>
  );
}
