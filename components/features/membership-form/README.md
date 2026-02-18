# Portable Membership Form

This folder contains a self-contained Membership Application Form module built with React, Tailwind CSS, and Shadcn UI components. It is designed to be easily dropped into any Next.js project.

## Prerequisites

Ensure your target project has the following dependencies installed:

```bash
npm install lucide-react clsx tailwind-merge class-variance-authority @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-checkbox @radix-ui/react-dialog
```

## Installation

1.  Copy the entire `portable-membership-form` folder into your project (e.g., inside `components/` or at the root).
2.  Import the `MembershipFormModal` component where you want to use it.

## Usage

```tsx
import { useState } from 'react';
import MembershipFormModal from './portable-membership-form/MembershipFormModal'; // Adjust path as needed
import { Button } from '@/components/ui/button'; // Or any button you have

export default function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Open Membership Form</Button>
      
      <MembershipFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
```

## Structure

*   `MembershipFormModal.tsx`: The main entry component.
*   `lib/`: Utility functions.
*   `types/`: TypeScript definitions.
*   `ui/`: Reusable UI components (buttons, inputs, etc.).
*   `components/`: Form-specific sub-components (steps).

## Customization

*   **API Calls**: Modify `components/review-and-submit.tsx` to handle the actual form submission to your backend.
*   **OTP Verification**: Modify `MembershipFormModal.tsx` and `components/OtpVerificationModal.tsx` to implement real OTP logic.
