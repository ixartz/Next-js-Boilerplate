'use client';

import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type WaitlistData = {
  name: string;
  email: string;
  role: string;
};

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<WaitlistData>({
    name: '',
    email: '',
    role: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1️⃣ Save info to DB
    await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: formData.name, email: formData.email, role: formData.role }),
    });
    // Store in cookie (expires in 365 days)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 365);
    document.cookie = `waitlist_data=${encodeURIComponent(JSON.stringify(formData))};expires=${expiryDate.toUTCString()};path=/`;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-4 pt-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="text-2xl">You're on the list!</CardTitle>
          <CardDescription className="max-w-sm">
            Thanks for joining,
            {' '}
            <span className="font-medium text-foreground">{formData.name}</span>
            .
            {'We\'ll notify you at '}
            <span className="font-medium text-foreground">{formData.email}</span>
            {' when ProofVault is ready.'}
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join the Waitlist</CardTitle>
        <CardDescription>
          Be the first to know when ProofVault launches.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              required
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Your Role</Label>
            <Select
              required
              value={formData.role}
              onValueChange={value =>
                setFormData({ ...formData, role: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="founder">Founder / CEO</SelectItem>
                <SelectItem value="marketer">Marketer</SelectItem>
                <SelectItem value="product">Product Manager</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="agency">Agency Owner</SelectItem>
                <SelectItem value="freelancer">Freelancer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" disabled={isSubmitting} className="mt-2 gap-2">
            {isSubmitting
              ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                )
              : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
