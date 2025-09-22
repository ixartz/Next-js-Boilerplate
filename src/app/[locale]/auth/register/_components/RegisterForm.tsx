'use client';

import type { RegisterFormData } from '@schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterValidation } from '@schemas/auth';
import { useRegister } from '@services/auth';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/components/form';
import { Input } from '@/components/ui/components/input';
import { PasswordInput } from '@/components/ui/components/password-input';

export const RegisterForm = () => {
  const t = useTranslations('RegisterForm');
  const registerMutation = useRegister();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterValidation),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullname: '',
    },
  });

  const handleRegister = form.handleSubmit(async (data) => {
    // Transform data to match API requirements
    const registerData = {
      email: data.email,
      password: data.password,
      fullname: data.fullname,
      locale: 'en-US', // You can make this dynamic based on current locale
    };

    registerMutation.mutate(registerData);
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
        <form onSubmit={handleRegister} className="space-y-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fullname_label')}</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={t('fullname_placeholder')}
                    hasError={!!form.formState.errors.fullname}
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('confirm_password_label')}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={t('confirm_password_placeholder')}
                    hasError={!!form.formState.errors.confirmPassword}
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

          {registerMutation.error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {registerMutation.error.message || t('error_generic')}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? t('registering_button') : t('register_button')}
          </Button>
        </form>
      </Form>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          {t('have_account')}
          {' '}
          <Link
            href="/auth/login"
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            {t('sign_in_link')}
          </Link>
        </p>
      </div>
    </div>
  );
};
