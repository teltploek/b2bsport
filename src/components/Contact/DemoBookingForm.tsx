'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface DemoBookingFormProps {
  dict: any;
}

export default function DemoBookingForm({ dict }: DemoBookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    club: '',
    preferredDate: '',
    preferredTime: '',
    memberCount: '',
    sports: '',
    currentMethod: '',
    requirements: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    
    const requiredFields = ['name', 'email', 'phone', 'club', 'memberCount', 'sports'];
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = dict.contactPage.errors.required;
      }
    });

    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = dict.contactPage.errors.invalidEmail;
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
    
    
    console.log('Demo booking form submitted:', formData);
    
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        club: '',
        preferredDate: '',
        preferredTime: '',
        memberCount: '',
        sports: '',
        currentMethod: '',
        requirements: ''
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        <CardTitle className="text-2xl">{dict.contactPage.demoBooking.title}</CardTitle>
        <CardDescription className="text-base">
          {dict.contactPage.demoBooking.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-name">
                {dict.contactPage.demoBooking.form.name} *
              </Label>
              <Input
                id="demo-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")}
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>
<div className="space-y-2">
              <Label htmlFor="demo-email">
                {dict.contactPage.demoBooking.form.email} *
              </Label>
              <Input
                id="demo-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-phone">
                {dict.contactPage.demoBooking.form.phone} *
              </Label>
              <Input
                id="demo-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={cn(errors.phone && "border-red-500 focus-visible:ring-red-500")}
                disabled={isSubmitting}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div>
<div className="space-y-2">
              <Label htmlFor="demo-club">
                {dict.contactPage.demoBooking.form.club} *
              </Label>
              <Input
                id="demo-club"
                name="club"
                type="text"
                value={formData.club}
                onChange={handleChange}
                className={cn(errors.club && "border-red-500 focus-visible:ring-red-500")}
                disabled={isSubmitting}
              />
              {errors.club && <p className="text-sm text-red-600">{errors.club}</p>}
            </div>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-date">
                {dict.contactPage.demoBooking.form.preferredDate}
              </Label>
              <Input
                id="demo-date"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                disabled={isSubmitting}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
<div className="space-y-2">
              <Label htmlFor="demo-time">
                {dict.contactPage.demoBooking.form.preferredTime}
              </Label>
              <Input
                id="demo-time"
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-members">
                {dict.contactPage.demoBooking.form.memberCount} *
              </Label>
              <Input
                id="demo-members"
                name="memberCount"
                type="number"
                value={formData.memberCount}
                onChange={handleChange}
                className={cn(errors.memberCount && "border-red-500 focus-visible:ring-red-500")}
                disabled={isSubmitting}
                min="1"
              />
              {errors.memberCount && <p className="text-sm text-red-600">{errors.memberCount}</p>}
            </div>
<div className="space-y-2">
              <Label htmlFor="demo-method">
                {dict.contactPage.demoBooking.form.currentMethod}
              </Label>
              <Select
                id="demo-method"
                name="currentMethod"
                value={formData.currentMethod}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">---</option>
                <option value="excel">{dict.contactPage.demoBooking.form.methodOptions.excel}</option>
                <option value="phone">{dict.contactPage.demoBooking.form.methodOptions.phone}</option>
                <option value="paper">{dict.contactPage.demoBooking.form.methodOptions.paper}</option>
                <option value="other">{dict.contactPage.demoBooking.form.methodOptions.other}</option>
              </Select>
            </div>
          </div>
<div className="space-y-2">
            <Label htmlFor="demo-sports">
              {dict.contactPage.demoBooking.form.sports} *
            </Label>
            <Input
              id="demo-sports"
              name="sports"
              type="text"
              value={formData.sports}
              onChange={handleChange}
              className={cn(errors.sports && "border-red-500 focus-visible:ring-red-500")}
              disabled={isSubmitting}
              placeholder="Football, Golf, Tennis..."
            />
            {errors.sports && <p className="text-sm text-red-600">{errors.sports}</p>}
          </div>
<div className="space-y-2">
            <Label htmlFor="demo-requirements">
              {dict.contactPage.demoBooking.form.requirements}
            </Label>
            <Textarea
              id="demo-requirements"
              name="requirements"
              rows={4}
              value={formData.requirements}
              onChange={handleChange}
              className="min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>
<Button 
            type="submit" 
            variant="cta"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? dict.contactPage.demoBooking.form.submitting 
              : dict.contactPage.demoBooking.form.submit
            }
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}