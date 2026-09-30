"use client";

import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex max-w-md items-center gap-3"
    >
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="w-full rounded-full border border-gray-100 bg-white px-5 py-3 text-sm text-gray-950 outline-none placeholder:text-gray-400 focus:border-blue-800"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}