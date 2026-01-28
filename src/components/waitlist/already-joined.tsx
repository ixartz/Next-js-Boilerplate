'use client';

import { Briefcase, CheckCircle2, Mail, User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type WaitlistData = {
  name: string;
  email: string;
  role: string;
};

const roleLabels: Record<string, string> = {
  founder: 'Founder / CEO',
  marketer: 'Marketer',
  product: 'Product Manager',
  developer: 'Developer',
  designer: 'Designer',
  agency: 'Agency Owner',
  freelancer: 'Freelancer',
  other: 'Other',
};

export function AlreadyJoined({ data }: { data: WaitlistData }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-6 w-6 text-accent" />
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle>You're already on the list!</CardTitle>
          <CardDescription>We'll notify you when we launch</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{data.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{data.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{roleLabels[data.role] || data.role}</span>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Hang tight! Great things are coming soon.
        </p>
      </CardContent>
    </Card>
  );
}
