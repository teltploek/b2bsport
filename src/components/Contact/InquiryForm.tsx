'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface InquiryFormProps {
  dict: any;
}

export default function InquiryForm({ dict }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    club: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = dict.contactPage.errors.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = dict.contactPage.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = dict.contactPage.errors.invalidEmail;
    }

    if (!formData.message.trim()) {
      newErrors.message = dict.contactPage.errors.required;
    }

    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = dict.contactPage.errors.invalidPhone;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    
    console.log('Inquiry form submitted:', formData);
    
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        club: '',
        message: ''
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-900">{dict.contactPage.success.title}</h3>
              <p className="text-green-700 mt-2">{dict.contactPage.success.message}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{dict.contactPage.inquiry.title}</CardTitle>
        <CardDescription className="text-base">
          {dict.contactPage.inquiry.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="inquiry-name">
              {dict.contactPage.inquiry.form.name} *
            </Label>
            <Input
              id="inquiry-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>
<div className="space-y-2">
            <Label htmlFor="inquiry-email">
              {dict.contactPage.inquiry.form.email} *
            </Label>
            <Input
              id="inquiry-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
<div className="space-y-2">
            <Label htmlFor="inquiry-phone">
              {dict.contactPage.inquiry.form.phone}
            </Label>
            <Input
              id="inquiry-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={cn(errors.phone && "border-red-500 focus-visible:ring-red-500")}
              disabled={isSubmitting}
            />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>
<div className="space-y-2">
            <Label htmlFor="inquiry-club">
              {dict.contactPage.inquiry.form.club}
            </Label>
            <Input
              id="inquiry-club"
              name="club"
              type="text"
              value={formData.club}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
<div className="space-y-2">
            <Label htmlFor="inquiry-message">
              {dict.contactPage.inquiry.form.message} *
            </Label>
            <Textarea
              id="inquiry-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={cn(
                "min-h-[120px]",
                errors.message && "border-red-500 focus-visible:ring-red-500"
              )}
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>
<Button 
            type="submit" 
            variant="cta"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? dict.contactPage.inquiry.form.submitting 
              : dict.contactPage.inquiry.form.submit
            }
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}