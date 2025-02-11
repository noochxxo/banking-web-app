'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { updateUser } from '@/lib/actions/user.actions';

const authFormSchema = () => {
  return z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    address1: z.string().min(2).max(100),
    city: z.string().min(2).max(100),
    stateProvince: z.string().min(2).max(100),
    zipPostalCode: z.string().min(2).max(20),
    dateOfBirth: z.date(),
    ssnSin: z.string().min(2).max(20),
  });
};

function BankSignUpForm( { userId }: {userId: string}) {

   const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const path = usePathname();
  

  const formSchema = authFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address1: '',
      city: '',
      stateProvince: '',
      zipPostalCode: '',
      dateOfBirth: new Date(),
      ssnSin: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      updateUser({
        path,
        userId,
        ...data,
      });
    } catch {
      setErrorMessage('Failed to save information');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-tl-[3em] rounded-bl-[1em] rounded-tr-[1em] rounded-br-[1em] p-12 m-6 h-full overflow-y-scroll overscroll-contain scrollbar-hidden">
      <h1 className='form-title'>Connect Your Banks</h1>
      <p className='
        text-salsifyGrass-500
        font-semibold
      '>To connect you bank, you must first provide your provide details.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your first name'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your last name'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='address1'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    Street Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your address'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    City
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your city'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='stateProvince'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    State/Province
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your state or province'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='zipPostalCode'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    Zip/Postal Code
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your Zip or Postal code'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />

          <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <>
            <FormItem>
              <div className='shad-form-item'>
              <FormLabel className='shad-form-label'>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className='calendar-btn'
                    >
                      {
                        format(field.value, "PPP")
                      }
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                  
                </PopoverTrigger>
                
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              </div>
              <FormMessage />
            </FormItem>
            </>
          )}
        />

        <FormField
            control={form.control}
            name='ssnSin'
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel
                    className='shad-form-label'
                  >
                    SSN/SIN
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter your SSN or SIN number'
                      className='shad-input'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage 
                  className='shad-form-message'
                />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="form-submit-button"
            disabled={isLoading}
          >
            Submit
            {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />
            )}
          </Button>

          {errorMessage && <p className="error-message">*{errorMessage}</p>}
        </form>
      </Form>
    </section>
  )
}

export default BankSignUpForm;