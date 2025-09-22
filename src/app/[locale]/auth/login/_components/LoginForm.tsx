'use client';

import type { LoginFormData } from '@schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginValidation } from '@schemas/auth';
import { useLogin } from '@services/auth';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/components/form';
import { Input } from '@/components/ui/components/input';
import { PasswordInput } from '@/components/ui/components/password-input';

export const LoginForm = () => {
  const t = useTranslations('LoginForm');
  const loginMutation = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = form.handleSubmit(async (data) => {
    loginMutation.mutateAsync(data);
  });

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold text-foreground">
          {t('title')}
        </h1>
        <p className="text-muted-foreground">
          {t('subtitle')}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={handleLogin} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email_label')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('email_placeholder')}
                    hasError={!!form.formState.errors.email}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('password_label')}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={t('password_placeholder')}
                    hasError={!!form.formState.errors.password}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {loginMutation.error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {loginMutation.error.response?.data?.message || t('error_generic')}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? t('signing_in_button') : t('sign_in_button')}
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-primary transition-colors hover:text-primary/80"
        >
          {t('forgot_password')}
        </Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          {t('no_account')}
          {' '}
          <Link
            href="/auth/register"
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            {t('sign_up_link')}
          </Link>
        </p>
      </div>
    </div>
  );
};
