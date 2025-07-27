import React from "react";

export default function MainAppContainer({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto grow px-4 py-3 ${className}`}>
      {children}
    </div>
  );
}
